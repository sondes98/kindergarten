import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePost,
  updatePost,
  updatePostComment,
  updatePostImage,
  updatePostLike,
} from "../../redux/postSlice";
import "./Post.css";
import { AiFillLike, AiFillEdit } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const PostDetails = ({ match, history }) => {
  const dispatch = useDispatch();
  const [updatedInfo, setUpdatedInfo] = useState({});
  const [commentInfo, setCommentInfo] = useState("");
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getSinglePost(match.params.id));
  }, []);
  const { post, loading } = useSelector((state) => state.post);

  const checkLike = (post) => {
    return post.likes.some((likeId) => likeId == user.userInfo._id);
  };
  const checkComment = (post) => {
    return post.comments.some((commentId) => commentId == user.userInfo._id);
  };
  const handleUpdate = (e) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  };
  const handleUpdateSubmit = (e, postId) => {
    e.preventDefault();
    dispatch(updatePost({ id: postId, data: updatedInfo }));
  };
  const handleUpdateImage = (e, postId) => {
    dispatch(updatePostImage({ id: postId, file: e.target.files[0] }));
  };
  const handleLike = (postId, post) => {
    dispatch(updatePostLike(postId));
  };
  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    dispatch(updatePostComment({ postId, desc: commentInfo }));
  };
  const handleDeleteSubmit = (e, post) => {
    e.preventDefault();
  };
  const inputRef = useRef(true);

  const changeFocus = (e) => {
    if (e.which === 13) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };
  const update = (id, value, e) => {
    updatePost({ id, post: value });
    inputRef.current.disabled = true;
  };
  return (
    <div className="SPost">
      {post && post.title && (
        <>
          {user.userInfo._id === post.owner ? (
            <>
              <div className="postEditor">
                <img src={post.image.imageURL} alt="kindergarten" width="200" />
                <input
                  className="title-P"
                  type="file"
                  name="image"
                  onChange={(e) => handleUpdateImage(e, post._id)}
                />
                <textarea
                  className="title-T"
                  type="text"
                  name="title"
                  defaultValue={post.title}
                  onChange={handleUpdate}
                />
                <AiFillEdit
                  type="submit"
                  onClick={(e) => handleUpdateSubmit(e, post._id)}
                  style={{ color: "black" }}
                />
                <textarea
                  className="desc-T"
                  type="text"
                  name="title"
                  defaultValue={post.description}
                  onChange={handleUpdate}
                />
                <AiFillEdit
                  type="submit"
                  onClick={(e) => handleUpdateSubmit(e, post._id)}
                  style={{ color: "black" }}
                />
              </div>
              {post.likes.length}
              <AiFillLike
                className="likebtn"
                style={checkLike(post) ? { color: "blue" } : { color: "gray" }}
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
              <input
                className="input-C"
                type="text"
                onChange={(e) => setCommentInfo(e.target.value)}
              />
              <button
                type="submit"
                onClick={(e) => handleCommentSubmit(e, post._id)}
                className="btn-file btnC"
              >
                Comment
              </button>
              {post.comments.map((comment) => {
                // const date = comment.createdAt.split('T')[0];
                const newDate = new Date(
                  comment.createdAt
                ).toLocaleDateString();
                const time = new Date(comment.createdAt).toLocaleTimeString();
                return (
                  <>
                    <h3>
                      {comment.commentOwner.parentsFullName}{" "}
                      <span>{`${newDate} ${time}`}</span>
                    </h3>
                    <p>{comment.desc} </p>

                    <br />
                  </>
                );
              })}
            </>
          ) : (
            <>
              <div className="boardPoster">
              <img src={post.image.imageURL} alt="kindergarten" width="200" />
                <h4>{post.owner}</h4>
                <h2>{post.title} </h2>
                <h5>{post.description}</h5>

              </div>
              <br/>
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
                <br/>
              <input
                className="input-C"
                type="text"
                onChange={(e) => setCommentInfo(e.target.value)}
              />
              <button
                type="submit"
                onClick={(e) => handleCommentSubmit(e, post._id)}
                className="btn-file btnC"
              >
                Comment
              </button>
              {post.comments.map((comment) => {
                // const date = comment.createdAt.split('T')[0];
                const newDate = new Date(
                  comment.createdAt
                ).toLocaleDateString();
                const time = new Date(comment.createdAt).toLocaleTimeString();
                return (
                  <>
                    <h3>
                      {comment.commentOwner.parentsFullName}{" "}
                      <span>{`${newDate} ${time}`}</span>
                    </h3>
                    <p>{comment.desc} </p>

                    <br />
                  </>
                );
              })}
            </>
          )}

        </>
      )}
    </div>
  );
};

export default PostDetails;
