import React from "react";

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
        <div className="imageContainer">
          <img src={image} alt={imageAltText} />
        </div>
        <div className="headerAndText">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewBoxes;
