import React from "react";
import "./GetNewsBySignup.scss";
import backgroundLine from "../../../assets/images/backgroundLines/background-wavy-lines.svg";
import Button from "../../../generics/Button";

const GetNewsBySignup = () => {
  return (
    <section className="signUpForNewsSection section">
      <img className="backgroundLine" src={backgroundLine} alt="background line"/>
      <div className="container">
        <div className="signUpForNews">
          <div className="newsUpdateText">
            <h2>Get News Updates By Signup</h2>
            <form method="post" action="#">
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="Example@example.com"
                required
              />
              <Button className="btn" type="yellow" text="Subscribe" url="/subscribe" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetNewsBySignup;
