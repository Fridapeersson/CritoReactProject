import React from "react";
import whiteLogo from "../../assets/images/logotype-white.svg";
import footerBackgroundLine from "../../assets/images/backgroundLines/background-lines-white-right.svg";
import "./Footer.scss";

const Footer = () => {

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
            {/* <!-- box 2 --> */}
            <div className="box">
              <h3>Company</h3>
              <div className="links">
                <p>
                  <a href="#">About</a>
                </p>
                <p>
                  <a href="#">Features</a>
                </p>
                <p>
                  <a href="#">Works</a>
                </p>
                <p>
                  <a href="#">Career</a>
                </p>
              </div>
            </div>
            {/* <!-- box 3 --> */}
            <div className="box">
              <h3>Help</h3>
              <div className="links">
                <p>
                  <a href="#">Customer Support</a>
                </p>
                <p>
                  <a href="#">Delivery Details</a>
                </p>
                <p>
                  <a href="#">Terms & Conditions</a>
                </p>
                <p>
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </div>
            {/* <!-- box 4 --> */}
            <div className="box">
              <h3>Resources</h3>
              <div className="links">
                <p>
                  <a href="#">Free eBooks</a>
                </p>
                <p>
                  <a href="#">Development Tutorial</a>
                </p>
                <p>
                  <a href="#">How to - Blog</a>
                </p>
                <p>
                  <a href="#">Youtube Playlist</a>
                </p>
              </div>
            </div>
            {/* <!-- box 5 --> */}
            <div className="box">
              <h3>Link</h3>
              <div className="links">
                <p>
                  <a href="#">Free eBooks</a>
                </p>
                <p>
                  <a href="#">Development Tutorial</a>
                </p>
                <p>
                  <a href="#">How to - Blog</a>
                </p>
                <p>
                  <a href="#">Youtube Playlist</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="copyRightContainer">
        <div className="container">
          <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
          <div className="socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
