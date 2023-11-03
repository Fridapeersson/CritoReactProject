import React from 'react'
import "./Categories.scss";

const Categories = ({title, posts}) => {
  return (
    <>
      <h6 className="title">{title} - <span className="posts">{posts} Posts</span></h6>
    </>
  )
}

export default Categories