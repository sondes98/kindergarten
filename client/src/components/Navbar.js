import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
// import { AiOutlineLogin } from "react-icons/ai";
// import { BiUser } from "react-icons/bi";
// import { AiOutlineHome } from "react-icons/ai";
// import { RiContactsBook2Line } from "react-icons/ri";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div className="main-nav">
      <div className="top-nav">
        <div className="left-side">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" width="750px" />
          </Link>
        </div>
        <div className="right-side">
         
          {user.isAuth ? (
            <div className="profile-nav">
              <li className="auth">
                <Link to="/login" onClick={() => dispatch(logout())}>
                  SIGN OUT{" "}
                </Link>
              </li>
              <li className="auth">
                <Link to="/profile">profile</Link>
                <h5>{user.userInfo.parentsFullName}</h5>
              </li>
              <li className="auth">
                <Link to="/admin">admin</Link>
              </li>
            </div>
          ) : (
            <>
              <li className="auth">
                <Link to="/login">SIGN IN</Link>
              </li>
              <li className="auth">
                <Link to="/register">INSCRIPTION</Link>
              </li>
            
            </>
          )}
        </div>
      </div>

      <nav className="main-navbar link1">
        <ul className="navbar">
          <li className="nav-links">
            <Link to="/">HOME </Link>
          </li>
          <li className="nav-links link2">
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li className="nav-links link3">
            <Link to="/ourstaffs">OUR STAFFS</Link>
          </li>
          <li className="nav-links link4">
            <Link to="/events">EVENTS</Link>
          </li>
          <li className="nav-links link5">
            <Link to="/contact-us">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
