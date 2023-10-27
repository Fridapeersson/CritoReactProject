import React from 'react'
import "./Companies.scss";
import dorfus from "../../../assets/images/companies/dorfus.svg";
import gobona from "../../../assets/images/companies/gobona.svg";
import martino from "../../../assets/images/companies/martino.svg";
import paperz from "../../../assets/images/companies/paperz.svg";
import square from "../../../assets/images/companies/square.svg";


const Companies = () => {
  return (
    <>
      <section className="companySection section">
        <div className="container">
          <div className="companies">
            <img src={dorfus} alt="Dorfus logo" />
            <img src={gobona} alt="Gobona logo" />
            <img src={martino} alt="Martino logo" />
            <img src={paperz} alt="Paperz logo" />
            <img src={square} alt="Square logo" />
          </div>
        </div>
      </section>  
    </>
  )
}

export default Companies