import React from "react";
import "./AboutCompany.scss";
import SectionTitle from "../../../generics/SectionTitle";
import founder from "../../../assets/images/aboutCompany/founder.jpg";
import founderLines from "../../../assets/images/aboutCompany/founderLines (1).png";
import { Link } from "react-router-dom";
import Button from "../../../generics/Button";
import TextComponent from "../../../generics/TextComponent";

const AboutCompany = () => {
  return (
    <>
      <section className="aboutCompanySection section">
        <div className="container">
          <div className="aboutCompany">
            <div className="aboutCompanyInfo">
              <div className="sectionTitle">
                <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
                {/* <p>About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2> */}
              </div>

              <div className="aboutCompanyText">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam officiis quas assumenda esse obcaecati? Ex esse error
                  voluptates iure vel totam eos.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  esse quasi incidunt adipisci accusantium libero provident
                  voluptate amet.
                </p>
              </div>
              <div className="buttonAndVideo centerButton">
                <Button type="dark" text="Learn More" url="/aboutcompany/learnmore" />
                <div className="playBtnAndIntroVideo">
                    <Link to="/aboutcompany/introvideo" className="playButton introVideo"><i className="fa-solid fa-play"></i>intro Video</Link>
                </div>
              </div>
            </div>

            <div className="founder">
              <img className="founderLine" src={founderLines} alt="" />

              <img src={founder} alt="Founder of Crito, Samantha Brown" />
              <div className="founderInfo">
                <h3>
                  Samantha Brown, <span>Founder</span>
                </h3>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
