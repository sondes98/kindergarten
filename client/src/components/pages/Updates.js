import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  addPic,
  updateImage,
  getSingleUser,
  updateAccount,
} from "../../redux/userSlice";
import "./Post.css";
import { AiFillEdit } from "react-icons/ai";

const Updates = ({ match, history }) => {
  const dispatch = useDispatch();
  const [updatedInfo, setUpdatedInfo] = useState({});
  useEffect(() => {
    dispatch(getSingleUser(user.userInfo._id));
  }, []);
  const { user, loading } = useSelector((state) => state.user);

  const handleUpdate = (e) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  };
  const handleUpdateSubmit = (e, userId) => {
    e.preventDefault();
    dispatch(updateAccount({ id: userId, data: updatedInfo }));
  };
  const handleUpdateImage = (e, userId) => {
    dispatch(updateImage({ id: userId, file: e.target.files[0] }));
  };
  const handleAddImage = (e, userId) => {
    dispatch(addPic({ id: userId, file: e.target.files[0] }));
  };
  return (
    <>
      <div className="Editor">
        <input
          className="title-P"
          type="file"
          name="image"
          onChange={(e) => handleUpdateImage(e, user._id)}
        />
        <input
          className="title-T"
          type="text"
          name="title"
          placeholder={user.parentsFullName}
        />
        <AiFillEdit
          type="edit"
          onChange={handleUpdate}
          style={{ color: "black" }}
        />

        <input
          className="title-T"
          type="text"
          name="title"
          placeholder={user.email}
        />
          <AiFillEdit
            type="edit"
            onChange={handleUpdate}
            style={{ color: "black" }}
          />
      
        <input
          className="title-T"
          type="password"
          name="title"
          placeholder={user.password}
        />
          {" "}
          <AiFillEdit
            type="edit"
            onChange={handleUpdate}
            style={{ color: "black" }}
          />

        <input
          className="title-T"
          type="text"
          name="title"
          placeholder={user.parentsFullName}
        />
          <AiFillEdit
            type="edit"
            onChange={handleUpdate}
            style={{ color: "black" }}
          />

        <button type="submit" onClick={(e) => handleUpdateSubmit(e, user._id)}>
          save changes
        </button>
      </div>
    </>
  );
};

export default Updates;
