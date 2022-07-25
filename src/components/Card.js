import React from "react";
import "./Card.css";
import orangeIcon from "../asserts/orangeIcon.png";
import vector2 from "../asserts/Vector2.png";
import vector3 from "../asserts/Vector3.png";
import vector1 from "../asserts/Vector1.png";
import House from "../asserts/house.jpg";
import quotes from "../asserts/quotes.png";
import person from "../asserts/person.png";
import Ellipse from "../asserts/Ellipse.png";
import quotes2 from "../asserts/quotes2.png";
const card = ({ image1, image2, desc, para }) => {
  return (
    <div className="card">
      <div className="card1">
        <div className="image">
          <img className="icon" src={image1} alt="" />
          <img className="icon1" src={image2} alt="" />
        </div>
        <div className="section">
          <p className="desc">{desc}</p>
          <p className="para">{para}</p>
        </div>
        <div className="bottomImage">
          <img className="icon" src={vector1} alt="" />
        </div>
      </div>

      <div className="card2">
        <div className="image2">
          <img className="icon" src={vector2} alt="" />
          <img className="icon2" src={orangeIcon} alt="" />
        </div>
        <div className="section2">
          <p className="desc2">{desc}</p>
          <p className="para2">{para}</p>
        </div>
        <div className="bottomImage2">
          <img className="icon" src={vector3} alt="" />
        </div>
      </div>

      <div
        className="card3"
        style={{
          backgroundImage: `url(${House})`,
          backgroundPosition: "center center",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="image3">
          <img className="icon3 icon" src={image2} alt="" />
        </div>
        <div className="section3">
          <p className="desc3">{desc}</p>
          <p className="para3">{para}</p>
        </div>
      </div>

      <div
        className="card4"
        style={{
          backgroundImage: `url(${House})`,
          backgroundPosition: "center center",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="image4">
          <img className="quotes icon" src={quotes} alt="" />
          <img className="icon4 icon" src={image2} alt="" />
        </div>
        <div className="section4">
          <p className="desc4">{desc}</p>
          <button className="button" style={{ zIndex: "1" }}>
            {para}
          </button>
        </div>
      </div>

      <div className="card5">
        <div className="section5">
          <img className="icon5" src={image2} alt="" />
          <p className="desc5">{desc}</p>
          <p className="para5">{para}</p>
        </div>
        <div className="person">
          <div
            className="circle"
            style={{
              backgroundImage: `url(${Ellipse})`,
              width: "201px",
              height: "201px",
              position: "relative",
              left: "24.3rem",
            }}
          ></div>
          <img src={person} alt="" className="persons" />
        </div>
      </div>

      <div className="card6">
        <div className="section6">
          <img src={image2} alt="" className="icon6" />
          <p className="desc6">{desc}</p>
          <p className="para6">{para}</p>
        </div>
        <div className="person">
          <div
            className="circle"
            style={{
              backgroundImage: `url(${Ellipse})`,
              width: "201px",
              height: "201px",
              position: "relative",
              left: "24.3rem",
            }}
          ></div>
          <img src={person} alt="" className="persons" />
        </div>
      </div>
    </div>
  );
};

export default card;
