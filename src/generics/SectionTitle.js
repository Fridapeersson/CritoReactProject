import React from 'react'
import "./SectionTitle.scss";

const SectionTitle = ({title, description}) => {
  return (
    <>
        <p>{title}</p>
        <h2>{description}</h2>
    </>
  )
}

export default SectionTitle