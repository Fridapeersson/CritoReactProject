import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import Button from "../../generics/Button";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import SocialMedia from "../../generics/SocialMedia";
import MobileMenu from "./MobileMenu";


const Header = () => {

  const contactInfos = [
    {icon: "phone-volume", text: "+46 (8) 121 470 50"},
    {icon: "envelope", text: "info@crito.com"},
    {icon: "location-dot", text: "Sveavägen 31, 111 34 STOCKHOLM"},
  ]

  //generics
  const socialMedias = [
    {link: "https://www.facebook.com", icon:"facebook"},
    {link: "https://www.twitter.com", icon:"twitter"},
    {link: "https://www.instagram.com", icon:"instagram"},
    {link: "https://www.linkedin.com", icon:"linkedin"}
  ]

  const [openMenu, setOpenMenu] = useState(false);
  // console.log(openMenu);
  return (
    <>
    {openMenu ? (<MobileMenu />) : (<></>)}


    <div className="gridWrapper">
      <header>
        <div className="container">
          <button className="menuBar" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (<i className="fa-solid fa-xmark xMark"></i>) : (<i className="fa-solid fa-bars"></i>)}
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
              <NavLink to="/service">Service</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <Button url="/login" text="Log in" type="yellow" />
          </div>
        </div>
      </header>
    </div>
    </>
  );
};

export default Header;

