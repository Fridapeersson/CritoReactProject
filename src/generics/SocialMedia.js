import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = ({icon, link}) => {
  return (
    <>
        <Link to={link} target="_blank">
            {<i className={`fa-brands fa-${icon}`}></i>}
        </Link>
    </>
  );
};

export default SocialMedia;
