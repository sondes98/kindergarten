import "./pages/Home.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const fadeProperties = {
     duration: 7000,
      pauseOnHover: true,
    };
 
  return (
    <>
      <div className="container">
        <div className="slide-container">
          <Slide  {...fadeProperties}>
            <div className="each-fade">
              <div className="class1">
                <h1 className="header"> MATERNITY </h1>
                <button className="btn"> Read More </button>
              </div>
            </div>
            <div className="each-fade">
              <div className="class2">
                <h1 className="header"> OUR PEDAGOGY </h1>
                <button className="btn"> Read More </button>
              </div>
            </div>
            <div className="each-fade">
              <div className="class3">
                <h1 className="header"> LEGAL MENTIONS </h1>
                <button className="btn"> Read More </button>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Slider;
