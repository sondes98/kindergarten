import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewUser } from "../../redux/userSlice";
import "./Register.css";
import { Link } from "react-router-dom";
import { FaSchool } from "react-icons/fa";


const RegisterP = ({ history }) => {
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
      <li className="RegisterHome">
      <Link className="RegisterHome" to="/"> <FaSchool/> Home </Link>
      </li>
      <div className="registerForm">
      <form className="formReg child-info">
        <h2>Child's Information</h2>
        <input
          type="text"
          className="form-control"
          name="childsFirstName"
          onChange={handleChange}
          placeholder="Enter Child's First Name..."
        />
        <input
          type="text"
          className="form-control"
          name="childsLastName"
          onChange={handleChange}
          placeholder="Enter your child's Last Name..."
        />
        <select
          className="form-control"
          name="Cgender"
          onChange={handleChange}
          placeholder="Select your gender..."
        >
          <option value="Option" name="Cgender" onChange={handleChange}>
            Option
          </option>
          <option value="Boy" name="Cgender" onChange={handleChange}>
            Boy
          </option>
          <option value="Girl" name="Cgender" onChange={handleChange}>
            Girl
          </option>
        </select>
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          onChange={handleChange}
          placeholder="Enter your child birth date..."
        ></input>
      </form>
      <form className="formReg parent-info">
        <h2>Parent's Information</h2>
        <input
          type="text"
          className="form-control"
          name="parentsFullName"
          onChange={handleChange}
          placeholder="Enter your full name..."
        />
        <select
          className="form-control"
          name="Cgender"
          onChange={handleChange}
          placeholder="Select your gender..."
        >
          <option value="Option" name="Cgender" onChange={handleChange}>
            Option
          </option>
          <option value="male" name="Pgender" onChange={handleChange}>
            Mum
          </option>
          <option value="female" name="Pgender" onChange={handleChange}>
            Dad
          </option>
        </select>
        <input
          type="text"
          className="form-control"
          name="phone"
          onChange={handleChange}
          placeholder="Enter your phone number..."
        />
        <input
          type="text"
          className="form-control"
          name="address"
          onChange={handleChange}
          placeholder="Enter your adress..."
        />
        <input
          type="text"
          className="form-control"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email address..."
        />
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password..."
        />

       
      </form>
      <button className="btn1" type="submit" onClick={handleSubmit}>
          Register
        </button>
        {user && user.registerErrors && <p>{user.registerErrors}</p>}
      </div>
     
    </div>
  );
};

export default RegisterP;
