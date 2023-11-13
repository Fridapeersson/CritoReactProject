import React from "react";
import { Link } from "react-router-dom";

const ContactBoxes = ({icon, title, url, text1, text2}) => {
  return (
    <>
      <div className="boxes">
        <div className="locationDot">
          <i className={`fa-regular fa-${icon}`}></i>
        </div>
        <div className="boxHeaderAndText">
          <h3>{title}</h3>
          <Link to={url} target="_blank"><p>{text1}</p></Link>
          <Link to={url} target="_blank"><p>{text2}</p></Link>
            
            
          
        </div>
      </div>
      {/* "https://www.google.com/maps?q=Sveav%C3%A4gen+31%2C+111+43+Stockholm" */}
    </>
  );
};

export default ContactBoxes;
