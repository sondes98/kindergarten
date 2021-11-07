import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import {
  addNewPost,
  getPosts,
  updatePostLike,
  updatePostComment,
} from "../../redux/postSlice";
import { updateAccount, updateImage } from "../../redux/userSlice";
import { getUsers } from "../../redux/userSlice";
import "./Profile.css";
import { Link } from "react-router-dom";
import { AiFillLike, AiFillEdit } from "react-icons/ai";
import { FaComment, FaSchool } from "react-icons/fa";
import {IoIosLogOut} from "react-icons/io"


const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const [commentInfo, setCommentInfo] = useState("");
  useEffect(() => {
    if (!user.isAuth) {
      history.push("/login");
    } else {
      dispatch(getPosts());
      dispatch(getUsers());
    }
  }, [user.isAuth]);
  const [postInfo, setPostInfo] = useState({});
  const [updatedInfo, setUpdatedInfo] = useState({});
  const [file, setFile] = useState({});
  const handleChange = (e) => {
    setPostInfo({ ...postInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewPost({ postInfo, file }));
  };

  const checkLike = (post) => {
    return post.likes.some((likeId) => likeId === user.userInfo._id);
  };
  const checkComment = (post) => {
    return post.comments.some((commentId) => commentId === user.userInfo._id);
  };
  const handleLike = (postId, post) => {
    dispatch(updatePostLike(postId));
  };
  const handleUpdateImage = (e, userId) => {
    dispatch(updateImage({ id: userId, file: e.target.files[0] }));
  };
  const handleUpdateSubmit = (e, userId) => {
    e.preventDefault();
    dispatch(updateAccount({ id: userId, data: updatedInfo }));
  };

  return (
    <>
       
        
          <div className="Profile-nav">
          <nav className="Pnav">
            <ul className="Profile-list">
              <li className="Profile-link">
                <Link to="/"> <FaSchool/> Home </Link>
              </li>
              
            </ul>
              <Link to={`/user/${user._id}`} className="profilePic">
                <img
                  className="Ppic"
                  src={user.userInfo.profilePic.imageURL}
                  alt=""
                />
                <h1>{user.userInfo.parentsFullName}</h1>
              </Link>
              <li className="Profile-link">
                <Link to="/login" onClick={() => dispatch(logout())}>
                  Log out <IoIosLogOut/>{" "}
                </Link>
              </li>
          </nav>
         
        </div>
            

        <div className="posts-side">
          <div>
            {(user.role === "admin") ? (
              <Link to="/admin">
                <button>Admin Space</button>
              </Link>
            ) : (
              <></>
            )}
          </div>

          <form className="cardP">
            <h1>Share with us your child experience here ...</h1>

            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="title"
              className="title-P"
              autocomplete="off"
            />
            <input
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="description"
              className="desc-P"
              autocomplete="off"
            />
            <input
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="title-P"
            />

            <button
              className="btn-file btnB"
              type="submit"
              onClick={handleSubmit}
            >
              Post
            </button>
          </form>
        </div>

        <br />
        <div className="allposts">
          <div className="Ppost">
            {post?.posts &&
              post?.posts.map((post) => {
                const newDate = new Date(post.createdAt).toLocaleDateString();
                const time = new Date(post.createdAt).toLocaleTimeString();
                return (
                  <>
                    <span>{`${newDate} ${time}`}</span>

                    <h4>{post.owner.parentsFullName}</h4>
                    <Link to={`/post/${post._id}`}>
                      {" "}
                      <img
                        src={post.image.imageURL}
                        alt="workshop"
                        width="200"
                      />
                    </Link>
                    <div className="comlikeP">
                      <h1 className="num">
                        {post.likes.length}{" "}
                        <AiFillLike
                          className="likebtn"
                          style={
                            checkLike(post)
                              ? { color: "#b3b3f7" }
                              : { color: "#cfcfcfa1" }
                          }
                          onClick={() => handleLike(post._id)}
                        />
                      </h1>

                      <h1 className="num">
                        {post.comments.length}{" "}
                        <FaComment
                          className="likebtn"
                          style={
                            checkComment(post)
                              ? { color: "blue" }
                              : { color: "gray" }
                          }
                        />
                      </h1>
                    </div>

                    <br />
                  </>
                );
              })}
          </div>
        </div>
    </>
  );
};

export default Profile;
