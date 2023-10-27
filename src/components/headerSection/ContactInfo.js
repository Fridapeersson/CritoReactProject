import React from "react";

const ContactInfo = ({icon, text}) => {
  return (
    <>
      <div className="contactContentBox">
        {<i className={`fa-regular fa-${icon}`}></i>}
        {text}
      </div>
    </>
  );
};

export default ContactInfo;
