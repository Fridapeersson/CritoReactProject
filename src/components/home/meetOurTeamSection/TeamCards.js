import React from "react";

const TeamCards = ({ image, imageAltText, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={imageAltText}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TeamCards;
