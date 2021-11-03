import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
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
  const handleDeleteSubmit = (e, postId) => {
    e.preventDefault();
    dispatch(deletePost({ id: postId }));
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
                <button
                  type="submit"
                  onClick={(e) => handleDeleteSubmit(e, post._id)}
                  className="btn-file btnC"
                >
                  Delete
                </button>
              </div>
              <div className="comlike">
                <h1 className="num">
                  {" "}
                  {post.likes.length}{" "}
                  <AiFillLike
                    className="likebtn"
                    style={
                      checkLike(post) ? { color: "blue" } : { color: "gray" }
                    }
                    onClick={() => handleLike(post._id)}
                  />
                </h1>

                <h1 className="num">
                  {post.comments.length}{" "}
                  <FaComment
                    className="likebtn"
                    style={
                      checkComment(post) ? { color: "blue" } : { color: "gray" }
                    }
                  />
                </h1>
              </div>
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
                //const date = comment.createdAt.split('T')[0];
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
              <br />
              <div className="comlike">
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
                      checkComment(post) ? { color: "blue" } : { color: "gray" }
                    }
                  />
                </h1>
              </div>
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
                    <h3 className="commentaire">
                      {comment.commentOwner.parentsFullName}{" "}
                      <span className="comment-date">{`${newDate} ${time}`}</span>
                    </h3>
                    <p className="comment-desc">{comment.desc} </p>

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
