import React from "react";
import "./WhyChooseUs.scss";
import whyChooseUsImg from "../../../assets/images/ourServices/ourServicesImg.jpg";
import SectionTitle from "../../../generics/SectionTitle";
import WhyChooseUsBox from "./WhyChooseUsBoxes";

const WhyChooseUs = () => {

    const whyChooseUsBoxes = [
        {title: "Process Excellence", description: "Lorem, ipsum dolor sit amet consectetur.", icon: "thumbs-up"},
        {title: "Strategic Planning", description: "Lorem, ipsum dolor sit amet consectetur.", icon: "octagon"},
        {title: "Experience Design", description: "Lorem, ipsum dolor sit amet consectetur.", icon: "pen-fancy"},
        {title: "Artificial Inteligence", description: "Lorem, ipsum dolor sit amet consectetur.", icon: "head-side-brain"}
    ]

  return (
    <section className="whyChooseUsSection section">
      <div className="container">
        <div className="contentContainer">
          <div className="sectionTitle">
            <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
          </div>
          
          {
            whyChooseUsBoxes.map((box, index) => (
                <WhyChooseUsBox key={index} title={box.title} description={box.description} icon={box.icon} />
            ))
          }
            
        </div>
        <div className="imgContainer">
          <img src={whyChooseUsImg} alt="Two women talking"/>
          <div className="background"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
