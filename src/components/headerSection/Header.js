import React from "react";
import Logo from "../../assets/images/logo.svg";
import Button from "../../generics/Button";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMedia";


const Header = () => {

  const contactInfos = [
    {icon: "phone-volume", text: "+46 (8) 121 470 50"},
    {icon: "envelope", text: "info@crito.com"},
    {icon: "location-dot", text: "Sveavägen 31, 111 34 STOCKHOLM"},
  ]

  const socialMedias = [
    {link: "https://www.facebook.com", icon:"facebook"},
    {link: "https://www.twitter.com", icon:"twitter"},
    {link: "https://www.instagram.com", icon:"instagram"},
    {link: "https://www.linkedin.com", icon:"linkedin"}
  ]

  return (
    <div className="gridWrapper">
      <header>
        <div className="container">
          <button className="menuBar">
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="logotype">
            <Link to="/">
              <img src={Logo} alt="Crito logotyp" />
            </Link>
          </div>

          <div className="contactInformation">
            {
              contactInfos.map((contactInfo, index) => (
                <ContactInfo key={index} icon={contactInfo.icon} text={contactInfo.text} />
              ))
            }
          </div>

          <div className="socialMedia">
            {
              socialMedias.map((socialMedia, index) => (
                <SocialMedia key={index} link={socialMedia.link} icon={socialMedia.icon} />
              ))
            }
          </div>

          <div className="mainMenu">
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Service</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <Button url="/login" text="Log in" type="yellow" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

