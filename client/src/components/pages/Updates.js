import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addPic,
    updateImage,
    getSingleUser,
    updateAccount,
} from "../../redux/userSlice";
import "./Post.css";
import { AiFillEdit } from "react-icons/ai";

const Updates = ({match, history}) => {
  const dispatch = useDispatch();
  const [updatedInfo, setUpdatedInfo] = useState({});
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getSingleUser(match.params.id));
  }, []);

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
      dispatch(addPic({ id: userId, file: e.target.files[0]}))
  }
    return (
        <>
            <div className="Editor">
                <input
                  className="title-P"
                  type="file"
                  name="image"
                  onChange={(e) => handleUpdateImage(e, user._id)}
                />
                <textarea
                  className="title-T"
                  type="text"
                  name="title"
                  defaultValue={user.parentsFullName}
                  onChange={handleUpdate}
                />

                <AiFillEdit
                  type="submit"
                  onClick={(e) => handleUpdateSubmit(e, user._id)}
                  style={{ color: "black" }}
                />

                </div> 
        </>
    )
}

export default Updates
