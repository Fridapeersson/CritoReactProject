import React from "react";
import { Link } from "react-router-dom";

const ArticleBoxes = ({url, imgSrc, imgAltText, title}) => {
  return (
    <article>
        <Link to={url} >
            <img src={imgSrc} alt={imgAltText}/>
          
            <h3>{title}</h3>
            Read More <i className="fa-solid fa-arrow-up-right arrow"></i>
        </Link>
    </article>
  );
};

export default ArticleBoxes;