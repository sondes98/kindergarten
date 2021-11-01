import React from "react";
import "./Home.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Navbar from "../Navbar";
import Footer from "../Footer";
import board from "../images/black-board1.gif";
import slide2 from "../images/bg23.gif";
import slide1 from "../images/bg13.gif";

const Home = () => {
  const fadeProperties = {
    duration: 6000,
    pauseOnHover: true,
  };

  return (
    <>
      <Navbar />
      <div className="section1">
        <div className="slide-container">
          <div className="slide-container">
            <Slide {...fadeProperties}>
              <div className="each-fade">
                <div className="class3">
                  <img src={slide1} alt="loading..." />
                </div>
              </div>

              <div className="each-fade">
                <div className="class3">
                  <img src={board} alt="loading..." />
                </div>
                {/* <div className="class2">
                <h1 className="header"> OUR PEDAGOGY </h1>
                <button className="btn"> Read More </button>
              </div> */}
              </div>
              <div className="each-fade">
                <div className="class3">
                  <img src={slide2} alt="loading..." />
                </div>
                {/* <h1 className="header"> LEGAL MENTIONS </h1>
                <button className="btn"> Read More </button> */}
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <br />
      <div className="section2">
        <div className="sec-container">
          <div className="column">
            <div className="content">
              <div className="icon">
                <img src="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/service2.jpg" />
              </div>
              <h1>Music Class</h1>
              <p>
                Decor ostdcaer urabitur ultrices posuere mattis. Nam
                ullamcorper, diam sit amet euismod pelleontesque, eros risus
                rhoncus libero, invest tibulum nisl ligula
              </p>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="icon">
                <img src="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/service1.jpg" />
              </div>
              <h1>French Class</h1>
              <p>
                Curabitur ultrices posuere mattis. Nam ullamcorper, diam sit
                amet euismod pelleo ntesque, eros risus rhoncus libero, invest
                tibulum nisl ligula
              </p>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="icon">
                <img src="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/service3.jpg" />
              </div>
              <h1>English Class</h1>
              <p>
                Rabitur ultrices posuere mattis. Nam ullamcorper, diam sit
                euismod pelleo ntesque, eros risus rhoncus libero, invest
                tibulum nisl gedretu osterftra ligula
              </p>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="icon">
                <img src="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/service4.jpg" />
              </div>
              <h1>Learning Activity</h1>
              <p>
                Decor ostdcaer urabitur ultrices posuere mattis. Nam
                ullamcorper, diam sit amet euismod pelleontesque, eros risus
                rhoncus libero, invest tibulum nisl ligula
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="back-to-top">to Top</span>
      <br />
      <div className="section3">
        <h1> Schedules</h1>
        <h2>Teddy Bear is open Monday through Friday</h2>
        <p>
          {" "}
          Children must be accompanied by parents to classes where they will be
          entrusted to the educational team, and this:
        </p>
        <div className="horraire">
          <div className="schedules sche3">
        <h3>TEDDY'S WELCOME</h3>
        <ul>
          <li> In the morning from 7:30 am.</li>
          <li> Afternoon from 2:00 p.m.</li>
        </ul>
        </div>
        <div className="schedules sche3">
        <h3>TEDDY'S EXIT</h3>

        <ul>
          <li> In the morning between 11:30 a.m. and 12 p.m.</li>
          <li> Afternoons between 4.30 p.m. and 5.30 p.m.</li>
        </ul>
        </div>
        <div className="schedules sche3">
        <h3>A permanence for the supervision of the children is ensured</h3>
        <ul>
          <li>
            In the morning from 7:30 a.m. to 8:30 a.m. and 11:30 a.m. to 12:30
            p.m.
          </li>
          <li> Evening from 4.30 p.m. to 5.30 p.m.</li>
        </ul>
        </div>
        </div>
       
      </div>
      <MessengerCustomerChat
        pageId="108893988247721"
        appId="298028912157340"
        // htmlRef="<REF_STRING>"
      />
      <Footer />
    </>
  );
};

export default Home;
