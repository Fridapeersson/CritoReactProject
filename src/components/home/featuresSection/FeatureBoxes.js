import React from "react";
import TextComponent from "../../../generics/TextComponent";

const FeatureBoxes = ({title, description, icon}) => {
  return (
    <div className="box">
      {<i className={`fa-solid fa-${icon}`}></i>}
      <TextComponent title={title} description={description} />

    </div>
  );
};

export default FeatureBoxes;
