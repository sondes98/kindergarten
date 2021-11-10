import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  addPic,
  updateImage,
  getUser,
  updateAccount,
} from "../../redux/userSlice";
import "./Post.css";
import { AiFillEdit } from "react-icons/ai";
import "./Update.css"
import {Link} from "react-router-dom"

const Updates = ({ match, history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] =useState({});
  const [updatedAcc, setUpdatedAcc] = useState({});
  useEffect(() => {
    dispatch(getUser(user.userInfo._id));
  }, [dispatch, user.userInfo._id]);
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdatedAcc({ ...updatedAcc, [e.target.name]: e.target.value });
  };
  const handleUpdateSubmit = (e, userId) => {
    e.preventDefault();
    dispatch(updateAccount({ _id: userId, data: updatedAcc }));
  };
  const handleUpdateImage = (e, userId) => {
    console.log(userId)
    dispatch(updateImage({ _id: userId, file: e.target.files[0] }));
  };

  return (
    <>
      <div className="Editor">
        <input
          className="title-P"
          type="file"
          name="profilePic"
          onChange={(e) => handleUpdateImage(e, user.userInfo._id)}
        />
        <input
          className="title-T"
          type="text"
          name="parentsFullName"
          defaultValue={user.userInfo.parentsFullName}
          onChange={handleChange}
        />
        <AiFillEdit
          type="edit"
          onChange={handleUpdate}
          style={{ color: "black" }}
        />
        <input
          className="title-T"
          type="text"
          name="email"
          placeholder={user.userInfo.email}
          onChange={handleChange}

        />
        <AiFillEdit
          type="edit"
          onChange={handleUpdate}
          style={{ color: "black" }}
        />
        <input
          className="title-T"
          type="password"
          name="password"
          defaultValue="tape your new password"
          onChange={handleChange}

        />{" "}
        <AiFillEdit
          type="edit"
          onChange={handleUpdate}
          style={{ color: "black" }}
        />
        <input
          className="title-T"
          type="text"
          name="phone"
          defaultValue={user.userInfo.phone}
          onChange={handleChange}

        />
        <AiFillEdit
          type="edit"
          onChange={handleUpdate}
          style={{ color: "black" }}
        />
        <button type="submit" onClick={(e) => handleUpdateSubmit(e, user.userInfo._id)}>
          save changes
        </button>
      </div>
    </>
  );
};

export default Updates;
