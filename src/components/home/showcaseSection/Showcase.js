import React from "react";
import showcaseImg from "../../../assets/images/showcase-image.svg";
import showcaseBackgroundLine from "../../../assets/images/backgroundLines/background-lines.svg";
import "./Showcase.scss";
import Button from "../../../generics/Button";


const Showcase = () => {
  return (
    <section className="showcase">
      <img className="backgroundLine" src={showcaseBackgroundLine} alt="" />
      <div className="container">
        <div className="showcaseContent">
          <div className="headerAndText">
            <h1>We Provide The Best Business Solutions</h1>

            <p>
              Establish your vision and value proposition and turn them into
              testable prototypes.
            </p>

          
            <Button url="/getconsulting" type="yellow" text="Get Consulting" />
            <Button url="/learnmore" type="" text="Learn More" />

          </div>
          <div className="showcaseImg">
            <img src={showcaseImg} alt="showcase image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
