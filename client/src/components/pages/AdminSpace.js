import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from "../../redux/userSlice";
import { getPosts, deletePost } from "../../redux/postSlice";
import { Link } from "react-router-dom";
import { FaBan } from 'react-icons/fa';

import "./AdminSpace.css";

const AdminSpace = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  console.log(user);
  useEffect(() => {
    if (!user.role === "admin".isAuth) {
      history.push("/login");
    } else {
      dispatch(getUsers());
      dispatch(getPosts());
    }
  }, [user.role === "admin".isAuth]);
  const handleRemoveSubmit = (e, userId) => {
    e.preventDefault();
    dispatch(deleteUser({ id: userId }));
  };
  const handleDeleteSubmit = (e, postId) => {
    e.preventDefault();
    dispatch(deletePost({ id: postId }));
  };
  return (
    <>
      <div className="jss594">
        <div className="ReactTable -striped -highlight">
          <table role="table" className="rt-table">
            <thead className="rt-thead -header">
              <tr role="row" className="rt-tr">
                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Fullname</h1>
                  </div>
                </th>
                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Email</h1>
                  </div>
                </th>
                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Child Name</h1>
                  </div>
                </th>
                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Child Age</h1>
                  </div>
                </th>

                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Actions</h1>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="rt-tbody">
              {user?.users &&
                user?.users.map((user) => {
                  const newDate = new Date(
                    user.dateOfBirth
                  ).toLocaleDateString();
                  return (
                    <tr role="row" className="rt-tr">
                      <td role="cell" className="rt-td">
                        {" "}
                        {user.parentsFullName}{" "}
                      </td>
                      <td role="cell" className="rt-td">
                        {" "}
                        {user.email}{" "}
                      </td>
                      <td role="cell" className="rt-td">
                        {" "}
                        {user.childsFirstName}{" "}
                      </td>
                      <td role="cell" className="rt-td">
                        {" "}
                        {`${newDate}`}{" "}
                      </td>
                      <td role="cell" className="rt-td">
                        <div className="actions-right">
                          <FaBan
                            className="MuiButtonBase-root MuiButton-root MuiButton-text jss439 jss442 jss464 jss459 jss467 delete"
                            tabindex="0"
                            type="submit"
                            onClick={(e) => handleRemoveSubmit(e, user._id)}
                            style={{color:"red"}}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="jss594 post">
        <div className="ReactTable -striped -highlight">
          <table role="table" className="rt-table">
            <thead className="rt-thead -header">
              <tr role="row" className="rt-tr">
                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Post Owner</h1>
                  </div>
                </th>
                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Post Title</h1>
                  </div>
                </th>
                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Post Description</h1>
                  </div>
                </th>
                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Post Image</h1>
                  </div>
                </th>

                <th
                  colspan="1"
                  role="columnheader"
                  title="Toggle SortBy"
                  className="rt-tn rt-resizable-header -cursor-pointer"
                >
                  <div className="rt-resizable-header-content">
                    <h1 className="columnHeader">Actions</h1>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="rt-tbody">
              {post?.posts &&
                post?.posts.map((post) => {
                 
                  return (
                    <tr role="row" className="rt-tr">
                      <td role="cell" className="rt-td">
                        {" "}
                        {post.owner.parentsFullName}{" "}
                      </td>
                      <td role="cell" className="rt-td">
                        {" "}
                        {post.title}{" "}
                      </td>
                      <td role="cell" className="rt-td">
                        {" "}
                        {post.description}{" "}
                      </td>
                      <td role="cell" className="rt-td">
                        {" "}
                        <img src={post.image.imageURL} alt="kindergarten" width="50" />                      </td>
                      <td role="cell" className="rt-td">
                        <div className="actions-right">
                          <FaBan
                            className="MuiButtonBase-root MuiButton-root MuiButton-text jss439 jss442 jss464 jss459 jss467 delete"
                            tabindex="0"
                            type="submit"
                            onClick={(e) => handleDeleteSubmit(e, post._id)}
                            style={{color:"red"}}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminSpace;
