import React from "react";
import "./OurServices.scss";
import Boxes from "./ServiceBoxes";
import SectionTitle from "../../../generics/SectionTitle.js";
import Button from "../../../generics/Button";
import backgroundLine from "../../../assets/images/backgroundLines/background-lines-right.svg";

const OurServices = () => {

    const boxes = [
        {title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/ourservices/businessadvice"},
        {title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/ourservices/startupbusiness"},
        {title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/ourservices/financialadvice"},
        {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/ourservices/riskmanagement"}
    ]

  return (
    <section className="ourServicesSection section">
      <img className="backgroundLine" src={backgroundLine} alt=""/>
      <div className="container">
        <div className="ourServices">
          <div className="sectionTitle">
            <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting" />
          </div>

          <div className="boxesContainer">
            {
                boxes.map((box, index) => (
                    <Boxes key={index} title={box.title} description={box.description} url={box.url} />
                ))
            }
          </div>

          <div className="browseServices">
            <Button text="Browse Services" url="/ourservices/browseservices" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
