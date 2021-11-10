import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login,clearErrors } from "../../redux/userSlice";
import "./login.css";
import { Link } from "react-router-dom";
import { FaSchool ,FaUserAlt } from "react-icons/fa";


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
    <div className="login-container">
      <div className="linksL">
      <li className="RegisterHome">
                    <Link className="RegisterHome" to="/"> <FaSchool/> Home </Link>
                  </li>
                  <li  className="RegisterHome">
                <Link  className="RegisterHome" to="/register"> <FaUserAlt/>Register</Link>
              </li>
      </div>
     
       <div className="registerForm">
       <form className="form-l">
        {/* <label className="form-g">Email</label> */}
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="enter your email address ..."
          onChange={handleChange}
        />
        {/* <label className="form-g">Password</label> */}

        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="enter your password ..."
          onChange={handleChange}
        />
        <button className="btn1" type="submit" onClick={handleSubmit}>
          login
        </button>
        {user && user.loginErrors && <p>{user.loginErrors} </p>}
      </form>
      {user && user.loginErrors && <p>{user.loginErrors}</p>}

       </div>
      
     
    </div>
  );
};

export default LoginP;
