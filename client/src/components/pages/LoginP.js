import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login,clearErrors } from "../../redux/userSlice";
import "./Register.css";
const LoginP = ({history}) => {
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({});
  const user = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(clearErrors());
    if (user.isAuth) {
      history.push('/profile');
    } else {
      history.push('/login');
    }
  }, [user.isAuth]);

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userInput));
  };

  return (
    <div className="container">
      <form className="form">
        <label className="form-g">Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="enter your email address ..."
          onChange={handleChange}
        />
        <label className="form-g">Password</label>

        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="enter your password ..."
          onChange={handleChange}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          login
        </button>
        {user && user.loginErrors && <p>{user.loginErrors} </p>}
      </form>
    </div>
  );
};

export default LoginP;
