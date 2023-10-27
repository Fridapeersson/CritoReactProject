import React from "react";
import { Link } from "react-router-dom";

const ArticleBoxes = ({ url, image, imageAltText, date, title, description }) => {
  return (
    <div className="article">
      <Link to={url}>
        <div className="imgContainer">
          <img src={image} alt={imageAltText} />
          <p>
            <span>{date}</span> 
            Mar
          </p>
        </div>
        <div className="articleText">
          <p className="header">Business</p>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleBoxes;
