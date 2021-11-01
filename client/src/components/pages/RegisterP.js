import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewUser } from "../../redux/userSlice";
import "./Register.css";
import { Link } from "react-router-dom";


const RegisterP = ({history}) => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({});
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.isAuth) {
      history.push("/payement");
    } else {
      history.push("/register");
    }
  }, [user.isAuth]);
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewUser(userInput));
  };
  return (
    <div className="register-container">
       <li className="Profile-link">
                    <Link to="/">Home </Link>
                  </li> 
      <form className="form">
        {/* <label className="form-g">Child's First Name</label> */}
        <input
          type="text"
          className="form-control"
          name="childsFirstName"
          onChange={handleChange}
          placeholder="Enter Child's First Name..."
        />
        {/* <label className="form-g">Child's Last Name</label> */}
        <input
          type="text"
          className="form-control"
          name="childsLastName"
          onChange={handleChange}
          placeholder="Enter your child's Last Name..."
        />
        {/* <label className="form-g"> Select your child's gender</label> */}
        <select
          className="form-control"
          name="gender"
          onChange={handleChange}
          placeholder="Select your gender..."
        >
           <option value="Option" name="gender" onChange={handleChange}>
            Option
          </option>
          <option value="male" name="gender" onChange={handleChange}>
            Male
          </option>
          <option value="female" name="gender" onChange={handleChange}>
            Female
          </option>
          <option value="other" name="gender" onChange={handleChange}>
            other
          </option>
        </select>
        {/* <label className="form-g">Chid's Birth Date</label> */}
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          onChange={handleChange}
          placeholder="Enter your child birth date..."
        ></input>
        {/* <label className="form-g">Parent's Full Name</label> */}
        <input
          type="text"
          className="form-control"
          name="parentsFullName"
          onChange={handleChange}
          placeholder="Enter your full name..."
        />

        {/* <label className="form-g">Email</label> */}
        <input
          type="text"
          className="form-control"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email address..."
        />

        {/* <label className="form-g">Password</label> */}
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password..."
        />

        <button className="btn1" type="submit" onClick={handleSubmit}>
          Register
        </button>
        {user && user.registerErrors && <p>{user.registerErrors} </p>}

      </form>

    </div>
  );
};

export default RegisterP;
