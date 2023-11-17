import React from 'react';
import errorImg from "../../assets/images/404.png";
import Button from '../../generics/Button';
import "./ErrorPage.scss";


const ErrorPage = () => {
  return (
    <>
      <div className="errorPage">
        <img src={errorImg} alt="error image" />

        <div  className="returnToHomeBtn">
          <Button url="/" type="yellow" text="Return to Home" />
        </div>
      </div>
    </>
  )
}

export default ErrorPage