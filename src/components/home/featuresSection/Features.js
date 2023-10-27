import React from "react";
import SectionTitle from "../../../generics/SectionTitle";
import "./Features.scss";
import Button from "../../../generics/Button";
import FeatureBoxes from "./FeatureBoxes";

const Features = () => {

    const featureBoxes = [
        {title: "Business Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", icon: "handshake"},
        {title: "Startup Business", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", icon: "lightbulb-on"},
        {title: "Financial Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", icon: "chart-mixed-up-circle-dollar"},
        {title: "Risk Management", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", icon: "cube"},
    ]

  return (
    <section className="featuresSection section">
      <div className="container">
        <div className="sectionTitle">
          <SectionTitle title="Features" description="Our Accounting is trueted by thousand of companies" />
          <div className="centerButton">
            
            <Button type="yellow" text="Learn More" url="/features/learnMore" />
          
          </div>
        </div>
        <div className="contentBox2">

            {
                featureBoxes.map((box, index) => (
                    <FeatureBoxes key={index} title={box.title} description={box.description} icon={box.icon} />
                ))
            }

          {/* <div className="box1">
            <i className="fa-sharp fa-handshake"></i>
            <h6 className="header">Business Advice</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="box2">
            <i className="fa-sharp fa-lightbulb-on"></i>
            <h6 className="header">Startup Business</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="box3">
            <i className="fa-sharp fa-solid fa-chart-mixed-up-circle-dollar"></i>
            <h6 className="header">Financial Advice</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="box4">
            <i className="fa-sharp fa-regular fa-cube"></i>
            <h6 className="header">Risk Management</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Features;
