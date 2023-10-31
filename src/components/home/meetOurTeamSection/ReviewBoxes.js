import React from "react";
import TextComponent from "../../../generics/TextComponent";

const ReviewBoxes = ({ reviewText, image, imageAltText, title, description }) => {
  return (
    <div className="review">
      <div className="stars">
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
      </div>
      <p className="reviewText">{reviewText}</p>
      <div className="user">
          <img src={image} alt={imageAltText} />
        <div className="headerAndText">
          <TextComponent title={title} description={description} />
          {/* <h3>{title}</h3>
          <p>{description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewBoxes;
