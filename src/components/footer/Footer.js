import React from "react";
import whiteLogo from "../../assets/images/logotype-white.svg";
import footerBackgroundLine from "../../assets/images/backgroundLines/background-lines-white-right.svg";
import "./Footer.scss";
import FooterBoxes from "./FooterBoxes";
import SocialMedia from "../../generics/SocialMedia";

const Footer = () => {

  const footerBoxes = [
    {title: "Company", links: [
      {url: "/about", urlText: "About"},
      {url: "/features", urlText: "Features"},
      {url: "/works", urlText: "Works"},
      {url: "/career", urlText: "Career"}
    ]},
    {title: "Help", links: [
      {url: "/support", urlText: "Customer Support"},
      {url: "/delivery", urlText: "Delivery Details"},
      {url: "/termsandconditions", urlText: "Terms & Conditions"},
      {url: "/privace", urlText: "Prvacy Policy"}
    ]},
    {title: "Resources", links: [
      {url: "/ebooks", urlText: "Free eBooks"},
      {url: "/developmenttutorial", urlText: "Development Tutorial"},
      {url: "/blog", urlText: "How To - Blog"},
      {url: "/youtubeplaylist", urlText: "Youtube Playlist"}
    ]},
    {title: "Resources", links: [
      {url: "/ebooks", urlText: "Free eBooks"},
      {url: "/developmenttutorial", urlText: "Development Tutorial"},
      {url: "/blog", urlText: "How To - Blog"},
      {url: "/youtubeplaylist", urlText: "Youtube Playlist"}
    ]}
  ]


  const socialMedias = [
    {link: "https://www.facebook.com", icon: "facebook"},
    {link: "https://www.twitter.com", icon: "twitter"},
    {link: "https://www.instagram.com", icon: "instagram"},
    {link: "https://www.linkedin.com", icon: "linkedin"},
  ]

  return (
    <footer className="footerSection">
      <img className="backgroundLine" src={footerBackgroundLine} alt="" />
      <div className="container">
        <div className="footerContent">
          {/* <!-- Box 1 --> */}
          <div className="imageBox">
            <img src={whiteLogo} alt="Crito Logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              obcaecati voluptas voluptates! Voluptates laborum nam ratione
              minus necessitatibus, iure praesentium.
            </p>
          </div>
          <div className="linkContainer">
          
            {
              footerBoxes.map((box, index) => (
                <FooterBoxes key={index} title={box.title} links={box.links} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="copyRightContainer">
        <div className="container">
          <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
          <div className="socials">
            {
              socialMedias.map((socialMedia, index) => (
                <SocialMedia key={index} link={socialMedia.link} icon={socialMedia.icon} />
              ))  
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
