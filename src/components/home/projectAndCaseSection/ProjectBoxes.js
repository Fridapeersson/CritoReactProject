import React from "react";
import { Link } from "react-router-dom";

const ProjectBoxes = ({url, imgSrc, imgAltText, title}) => {
  return (
    <article>
        <Link to={url} >
            <img src={imgSrc} alt={imgAltText}/>
          
            <h4>{title}</h4>
            Read More <i className="fa-solid fa-arrow-up-right arrow"></i>
        </Link>
    </article>
  );
};

export default ProjectBoxes;