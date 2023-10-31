import React from "react";
import { Link } from "react-router-dom";
import TextComponent from "../../../generics/TextComponent";

const ArticleBoxes = ({ url, image, imageAltText, date, month, title, description }) => {
  return (
    <div className="article">
      <Link to={url}>
        <div className="imgContainer">
          <img src={image} alt={imageAltText} />
          <p>
            <span>{date}</span> 
            {month}
          </p>
        </div>
        <div className="articleText">
          <p>Business</p>
          <TextComponent title={title} description={description} />
        </div>
      </Link>
    </div>
  );
};

export default ArticleBoxes;
