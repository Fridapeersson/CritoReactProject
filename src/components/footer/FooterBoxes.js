import React from "react";
import { Link } from "react-router-dom";

const FooterBoxes = ({ title, links }) => {
  return (
    <div className="box">
      <h3>{title}</h3>
      <div className="links">

        {
          links.map((link, index) => (
            <p key={index}>
              <Link to={link.url}>{link.urlText}</Link>
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default FooterBoxes;
