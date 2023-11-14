import React from 'react'
import backgroundLine from "../../assets/images/backgroundLines/background-lines.svg";
import { NavLink } from 'react-router-dom';
import "./SecondaryHeader.scss";

const SecondaryHeader = ({title, link}) => {
  return (
    <>
    <section className="secondaryHeaderSection">
        <div className="secondaryHeader">
            <img src={backgroundLine} className="backgroundImage" />
            <div className="navlinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/news" className="active">{link}</NavLink>
            </div>
            <h1>{title}</h1>
        </div>
        </section>
    </>
  )
}

export default SecondaryHeader