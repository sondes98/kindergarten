import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { addNewPost, getPosts, updatePostLike,   updatePostComment,
} from "../../redux/postSlice";
import "./Profile.css";
import { Link } from "react-router-dom";
import { AiFillLike, AiFillEdit } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
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
    }
  }, [user.isAuth]);
  const [postInfo, setPostInfo] = useState({});
  const [file, setFile] = useState({});
  const handleChange = (e) => {
    setPostInfo({ ...postInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewPost({ postInfo, file }));
  };


  const checkLike = (post) => {
    return post.likes.some((likeId) => likeId == user.userInfo._id);
  };
  const checkComment = (post) => {
    return post.comments.some((commentId) => commentId == user.userInfo._id);
  };
  const handleLike = (postId, post) => {
    dispatch(updatePostLike(postId));
  };
  const newDate = new Date(
    post.createdAt
  ).toLocaleDateString();
  const time = new Date(post.createdAt).toLocaleTimeString();
;

  return (
    <>
      <div className="profile">
        <div className="user-side">
          <div className="user-info sideprofile">
            <div className="profilePic">
              <img
                src="https://houstontamilchair.org/wp-content/uploads/2020/07/parent-directory-avatar-2png-avatar-png-256_256.png"
                alt="profilepic"
                className="profilepic"
              />
            </div>
            <div className="userInfo">
              <h1>{user.userInfo.parentsFullName}</h1>
              <h3> Parent of the Teddy </h3>

              <h2> {user.userInfo.childsFirstName}</h2>
            </div>
            <div className="Profile-nav">
              <nav className="Pnav">
                <ul className="Profile-list">
                  <li className="Profile-link">
                    <Link to="/">Home </Link>
                  </li>
                  <li className="Profile-link">
                    <Link to="/login" onClick={() => dispatch(logout())}>
                      Log out{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="posts-side">
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
              post?.posts.map((post) => (
                <>
                  <span>{`${newDate} ${time}`}</span>

                  <h4>{post.owner}</h4>
                  <Link to={`/post/${post._id}`}>
                    {" "}
                    <img src={post.image.imageURL} alt="workshop" width="200" />
                  </Link>
                 
                  {post.likes.length}
                  <AiFillLike
                    className="likebtn"
                    style={
                      checkLike(post) ? { color: "blue" } : { color: "gray" }
                    }
                    onClick={() => handleLike(post._id)}
                  />
                  {post.comments.length}
                  <FaComment
                    className="likebtn"
                    style={
                      checkComment(post) ? { color: "blue" } : { color: "gray" }
                    }
                  />
                  <br />
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
