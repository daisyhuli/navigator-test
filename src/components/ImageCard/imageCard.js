import React, { Fragment } from "react";
import { menuItems } from "./option";
import "./index.scss";

const ImageCard = () => (
  <Fragment>
    {menuItems.map((item, index) => {
      return (
        <div className={`image-container ${item.className}`} key={index}>
          <div className="image-text-box">
            <span className="image-class">{item.name}</span>
            <div className="triangle"></div>
          </div>
        </div>
      );
    })}
  </Fragment>
);

export default ImageCard;
