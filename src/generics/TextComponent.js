import React from 'react'

const TextComponent = ({ title, description }) => {
  return (
    <>
        <h4 className="header">{title}</h4>
        <p>{description}</p>
    </>
  )
}

export default TextComponent