import React from "react";
import "./Home.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Home = () => {
  const fadeProperties = {
    duration: 7000,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="section1">
        <div className="slide-container">
          <div className="slide-container">
            <Slide {...fadeProperties}>
              <div className="each-fade">
                <div className="class3">
                <img src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/bg2.jpg" alt="logo" />
                </div>
              </div>

              <div className="each-fade">
                <div className="class3">
                  <img src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/bg2.jpg" alt="logo" />
                </div>
                {/* <div className="class2">
                <h1 className="header"> OUR PEDAGOGY </h1>
                <button className="btn"> Read More </button>
              </div> */}
              </div>
              <div className="each-fade">
                <div className="class3">
                <img src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/bg2.jpg" alt="logo" />
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
      <MessengerCustomerChat
    pageId="108893988247721"
    appId="298028912157340"
    // htmlRef="<REF_STRING>"
  />,
    </>
  );
};

export default Home;
