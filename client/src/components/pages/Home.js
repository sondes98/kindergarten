import React from "react";
import Slider from "../Slider";
import "./Home.css";
import one from "../images/one.jpg";
const Home = () => {
  return (
    <>
      <div>
        <Slider />
      </div>
      <div className="prog">
        <img src={one} alt="photo" className="homy" />
        <div className="card">
          <h1 className="title1">Educational program</h1>
          <ul className="prog-list">
            <li>
              - An educational program inspired by the great French and
              English-speaking nursery schools
            </li>
            <li>- A qualified, experienced and motivated team</li>
            <li>- An active and interactive pedagogy</li>
            <li>
              - Your children learn all 3 languages ​​(Arabic, French and English)
            </li>
            <li>- Ultramodern educational materials</li>
            <li>- Educational games adapted to the age of your children</li>
            <li>- Seasonal educational outings</li>
            <li>
              - Free Koran, music, painting and theater clubs for all levels
            </li>
            <li>
              - Teddy's children are admitted to all national and international
              preparatory schools
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
