import React from "react";
import "./Footer.css";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="container">
            <div className="column 1">
              <aside className="side">
                <h3 className="side-title red_sketch">
                  {" "}
                  About Teddy Bear Preschool
                </h3>
                <div className="side-text">
                  <p>
                    TBS comes with powerful theme options, which empowers your
                    chid to quickly and easily ..
                  </p>
                  <ul>
                    <li>English Class</li>
                    <li>French Class</li>
                    <li>Music Class</li>
                    <li>Drawing Class</li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="column 1">
              <aside className="side">
                <h3 className="side-title yellow_sketch"> Contact</h3>
                <div className="side-text">
                  <h4 className="text">
                    {" "}
                    <ImLocation /> Rue Salem Hrayech, Jawhara 4000, Sousse
                  </h4>
                 
                  <h4 className="text">
                    {" "}
                    <AiOutlineMail /> teddy.preschool@gmail.com
                  </h4>
                  <h4  className="text">
                    {" "}
                    <AiOutlinePhone />
                    Tel : (000) 233 - 3236
                  </h4>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div className="copyright">
            <h5> © 2021 Teddy Bear Preschool. All rights reserved. Designed by Sondes Ahmed</h5>
            </div>
          
      </footer>
    </>
  );
};

export default Footer;
