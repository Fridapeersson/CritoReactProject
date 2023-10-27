import React from "react";
import { Link } from "react-router-dom";


const Boxes = ({title, description, url}) => {
  return (
    <div className="boxes">
      <div className="line"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="boxesButton">
        <Link to={url} className="blackButton">
          <i className="fa-regular fa-arrow-right"></i>
        </Link>
      </div>

      
    </div>
  );
};

export default Boxes;
