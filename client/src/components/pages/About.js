import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./About.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Contact = () => {
  const fadeProperties = {
    duration: 7000,
    pauseOnHover: true,
  };
  return (
    <>
    <Navbar/>
      <div className="sec1">
        <h1>About Us</h1>
      </div>
      <div className="sec2">
        <div className="slideContainer">
          <Slide {...fadeProperties}>
            <div className="eachFade">
              <div className="content3">
                <img
                  src="https://www.unicef.org/montenegro/sites/unicef.org.montenegro/files/styles/hero_mobile/public/his_sofija-05-19-235_0.jpg?itok=DLoaFG8o"
                  alt="logo"
                />
              </div>
            </div>

            <div className="eachFade">
              <div className="content3">
                <img
                  src="https://mspmag.com/downloads/42048/download/Kids-sitting-listening-to-a-woman-reading-a-story.jpg?cb=885bbdbf51db031c01959bd71779d411&w=640"
                  alt="logo"
                />
              </div>
            </div>
            <div className="eachFade">
              <div className="content3">
                <img
                  src="https://kidskinder.com.au/wp-content/uploads/2019/07/location-img-05.jpg"
                  alt="logo"
                />
              </div>
            </div>
          </Slide>
        </div>
        <div className="with">
          <h1>Our Leisure Time</h1>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores. All the Lorem Ipsum generators on the Internet tend to
            repeat predefined chunks as necessary.
          </p>
          <div className="classes">
            <div className="columnSpace">
              <Link to="/englishclass">
                <label
                  className="dt-sc-button-outlined xlarge red "
                >
                  {" "}
                  <span>1</span> English Class{" "}
                </label>
              </Link>
            </div>

            <div className="columnSpace">
              <Link to="/FrenchClass">
                <label
                  className="dt-sc-button-outlined xlarge orange "
                >
                  {" "}
                  <span>2</span>Frensh Class{" "}
                </label>
              </Link>
            </div>

            <div className="columnSpace">
              <Link to="/outdoorgaming">
                <label
                  className="dt-sc-button-outlined xlarge green "
                >
                  {" "}
                  <span>3</span> Outdoor Gaming{" "}
                </label>
              </Link>
            </div>

            <div className="columnSpace">
              <Link to="/learningactivity">
                <label
                  className="dt-sc-button-outlined xlarge blue "
                >
                  {" "}
                  <span>4</span> Learning Activity{" "}
                </label>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
