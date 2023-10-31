import React from "react";
import { Link } from "react-router-dom";
import TextComponent from "../../../generics/TextComponent";


const Boxes = ({title, description, url}) => {
  return (
    <div className="boxes">
      <div className="line"></div>
      <TextComponent title={title} description={description} />
      {/* <h4 className="header">{title}</h4>
      <p>{description}</p> */}
      <div className="boxesButton">
        <Link to={url} className="blackButton">
          <i className="fa-regular fa-arrow-right"></i>
        </Link>
      </div>

      
    </div>
  );
};

export default Boxes;
