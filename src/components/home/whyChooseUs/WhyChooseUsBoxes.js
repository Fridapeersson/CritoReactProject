import React from "react";

const WhyChooseUsBox = ({title, description, icon}) => {
  return (
    <div className="content">
      {<i className={`fa-regular fa-${icon}`}></i>}
      <div className="headerAndText">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsBox;
