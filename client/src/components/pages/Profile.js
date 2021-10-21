import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewPost, getPosts } from "../../redux/postSlice";
import './Profile.css'

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post)
  const user = useSelector((state) => state.user);
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
  return (
    <div className="profile">
      <form className="form-p">
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
        />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="description"
        />
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="btn1" type="submit" onClick={handleSubmit}>
          Post
        </button>
      </form>
      <br />
      <div>
      {post?.posts &&
          post?.posts.map(post => (
          <>
         <div>
        <h1>title</h1>
        <p>
          Lorem :;,c ildhczyhc ukgdgqkd ischsbdhcgs scg,svchj ckshdkgsduc
          yzgdzjb uyukdcb
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCK73cc8xlney0puNjz9MHtmU44qrchh5qOQ&usqp=CAU"
          alt="event"
        />
      </div>
         </>
        ))}
      </div>
    </div>
  );
};

export default Profile;
