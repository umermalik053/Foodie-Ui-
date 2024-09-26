import React from "react";
import Button from "../common/Button/Button";
import "./Banner.css";

const Banner = ({ data, isbutton, isrotate, isbutton2 }) => {
  return (
    <div>
      <div className={`bannerParent  ${isrotate && "rotate"}`}>
        <div className="banner">
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <div className="button-wrapper">
            {isbutton && <Button text={data.buttonText} />}
            {isbutton2 && <Button text={data.buttonText2} />}
          </div>
        </div>
        <div className="bannerImage">
          <img src={data.image} width={580} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
