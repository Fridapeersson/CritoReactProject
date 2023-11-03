import React from "react";
import { Link } from "react-router-dom";
import "./RecentPosts.scss";

const ReacentPosts = ({ title }) => {
  return (
    <>
      <div className="posts">
        <Link to="#" className="link">
          <h6 className="title">{title}</h6>
          <div className="pContainer">
            <p className="date">Jan 14, 2020</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ReacentPosts;
