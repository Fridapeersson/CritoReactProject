import React from 'react'
import "./Button.scss";
import { Link } from 'react-router-dom';

const Button = ({url, type, text}) => {

    const getButtonTheme = () => {
        if(type === "yellow") {
            return "buttonTheme";
        } else if(type === "dark") {
            return "blackButton"
        } else {
            return "transparentButton";
        }
    }

  return (
    <Link to={url} className={getButtonTheme()}>{text} 
        <i className="fa-solid fa-arrow-up-right arrow"></i>
    </Link>
  )
}

export default Button