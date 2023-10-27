import React from "react";

const FeatureBoxes = ({title, description, icon}) => {
  return (
    <div className="box1">
      {<i className={`fa-solid fa-${icon}`}></i>}
      <h6 className="header">{title}</h6>
      <p>{description}</p>
    </div>
  );
};

export default FeatureBoxes;
