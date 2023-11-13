import React from 'react'
import { Link } from 'react-router-dom'
import backgroundLine from "../../assets/images/backgroundLines/background-lines.svg";
import "./Connect.scss";
import ContactBoxes from './ContactBoxes';
import MessageUsForm from './MessageUsForm';

const Connect = () => {

    const contactBoxes = [
        {icon: "location-dot", title:"Visit Us", url: "https://www.google.com/maps?q=Sveav%C3%A4gen+31%2C+111+43+Stockholm", text1:"Sveavägen 31 ",  text2: "111 34 STOCKHOLM" },
        {icon: "phone-volume", title:"Call Us", url: "#", text1:"+46 (8) 121 470 50",  text2: "+46 (8) 121 470 51" },
        {icon: "envelope", title:"Email Us", url: "mailto:info@crito.com", text1:"info@crito.com",  text2: "support@crito.com" },
    ]

  return (
    <>
        <main>
        <section className="contactSection section">
          <img src={backgroundLine} alt="" />
          <div className="container">
            <div className="homeConnect">
              <p><Link to="/" className="home"> Home</Link></p>
              <p><Link to="/contact" className="connect">Connect</Link></p>
            </div>
            <h1>Let's Connect</h1>
          </div>
        </section>
        <section className="companyInfoSection section">
          <div className="container">

            <div className="boxContainer">
                {
                  contactBoxes.map((box, index) => (
                      <ContactBoxes key={index} icon={box.icon} title={box.title} url={box.url} text1={box.text1} text2={box.text2} />
                  ))
                }
            </div>
          </div>
        </section>

            <MessageUsForm />

        <section className="map">
          <div className="mapContainer">
          <iframe
            className="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.7792237186056!2d18.05943557743645!3d59.33663971043525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1ssv!2sse!4v1696247373469!5m2!1ssv!2sse"
            width="1900"
            height="400"
            // style="border: 0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
           </div> 
        </section>
      </main>
    </>
  )
}

export default Connect