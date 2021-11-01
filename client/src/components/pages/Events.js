import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Events.css";

const Events = () => {
  const handleChange = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar/>
      <div className="sec1">
        <h1>Upcoming Events</h1>
      </div>
      <form className="add-event">
        <input
          className="event-input"
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
        />
        <input
          className="event-input"
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="description"
        />
        <input
          className="event-input1"
          type="file"
          name="file"
          // onChange={}
        />
        <button className="add-btn" type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <br />
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
      <Footer/>
    </div>
  );
};

export default Events;
