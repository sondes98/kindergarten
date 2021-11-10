import React, { useState, useEffect } from "react";
import { addNewEvent, getEvents } from "../../redux/eventSlice";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Events.css";
import {useSelector, useDispatch} from "react-redux";

const Events = ({ history}) => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user.role==="admin".isAuth) {
      history.push("/login");
    } else {
      dispatch(getEvents());

    }
  }, [user.role==="admin".isAuth]);
const [eventInfo, setEventInfo] = useState({});
const [file, setFile] = useState({});
const handleChange = (e) => {
    setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewEvent({ eventInfo, file }));
  };
  return (
    <div>
      <Navbar/>
      <div className="sec1">
        <h1>Upcoming Events</h1>
      </div>
      <div className="posts-side">
          <form className="cardP">
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
      <div className="event">
          {event?.events &&
            event?.events.map((event) => {
              const newDate = new Date(event.createdAt).toLocaleDateString();
              const time = new Date(event.createdAt).toLocaleTimeString();
              return (

                <div className="OnePost">
                  <span>{`${newDate} ${time}`}</span>
                  <h4>{event.title}</h4>
                    {" "}
                    <img src={event.image.imageURL} alt="workshop" width="200" />
                    <p>{event.description}</p>
                </div>
              
              );
            })}
        </div>
      <Footer/>
    </div>
  );
};

export default Events;
