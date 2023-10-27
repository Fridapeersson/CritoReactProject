import React from "react";
import Button from "../../../generics/Button";
import SectionTitle from "../../../generics/SectionTitle";
import ArticleBoxes from "./ArticleBoxes";
import articleImage1 from "../../../assets/images/projectAndCaseStudies/articleImage1.jpg"
import articleImage2 from "../../../assets/images/projectAndCaseStudies/articleImage2.jpg"
import articleImage3 from "../../../assets/images/projectAndCaseStudies/articleImage3.jpg"
import articleImage4 from "../../../assets/images/projectAndCaseStudies/articleImage4.jpg"
import "./ProjectAndCase.scss";

const ProjectAndCase = () => {

    const articleBoxes = [
        {url: "/projectandcase/growyourbusiness", imgSrc: articleImage1, imgAltText: "A mans hands reading a business paper", title: "Grow Your Business"},
        
        {url: "/projectandcase/responsivewebsite", imgSrc: articleImage2, imgAltText: "Pink apple products", title: "Why your client needs a responsive website"},
        
        {url: "/projectandcase/educateemployees", imgSrc: articleImage3, imgAltText: "Desk with office supplies", title: "Educate your employees to get better results"},
        
        {url: "/projectandcase/businessinsights", imgSrc: articleImage4, imgAltText: "Laptop with Buisness Intelligence Insights", title: "Business Insights is a important piece of your business"}
    ]

  return (
    <>
      <section className="projectAndCaseSection section">
        <div className="container">
          <div className="sectionTitle">
            <SectionTitle title="Project & Case Studies" description="Let’s Looks Our Global Projects" />
          </div>

          <div className="projectAndCases">
            {
              articleBoxes.map((articleBox, index) => (
                <ArticleBoxes key={index} url={articleBox.url} imgSrc={articleBox.imgSrc} imgAltText={articleBox.imgAltText} title={articleBox.title} />
              ))
            }
          </div>
          <div className="centerButton">
            <Button url="/projectandcase/allrecentprojects" type="dark" text="All Reacent Projects">
                <i className="fa-solid fa-arrow-up-right arrow"></i>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectAndCase;
