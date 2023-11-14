import React, { useState } from "react";
import "./MessageUsForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const MessageUsForm = () => {
  //state hook för att hantera om meddelandet skickats eller inte
  const [messageSent, setMessageSent] = useState(false);
  const [conflictMessage, setConflictMessage] = useState(false);
  // formik för hantering av formuläret
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    // Definerar "regler" för valideringen efter följande schema
    validationSchema: Yup.object({
      name: Yup.string()
      .min(2, "Namn måste innehålla minst 2 tecken")
      .required("Du måste ange ett namn"),

      email: Yup.string()
      .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, "Du måste ange en giltlig epostadress")
      .email("Ogiltlig Email")
      .required("Du måste ange en Email"),

      message: Yup.string()
      .min(2, "Meddelandet måste innehålla minst 2 tecken")
      .required("Du måste ange ett meddelande"),
    }),

    //Funktion när formuläret skickas
    onSubmit: async (values) => {
      console.log(values)

      try {
        //Skapar ett objekt med det användaren skrivit in
        const sendFormData = {
          name: values.name,
          email: values.email,
          message: values.message,
        };

        const apiUrl = "https://win23-assignment.azurewebsites.net/api/contactform";
        const response = await fetch(apiUrl, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json"
          }, 
          body: JSON.stringify(sendFormData)
        });
        // hantering av serverns svar
        if(response.ok) {
          //om allt är ok, nollställ formuläret och visa success meddelande 4 sek
          console.log("Formuläret skickades ")
          setMessageSent(true);
          setTimeout(() => {
            form.resetForm({
              values: {name: "", email: "", message: ""}
            });
            setMessageSent(false);
          }, 4000);
        } else if(response.status === 400) {
          console.log("Felkod 400")
        } else if(response.status === 409) {
          console.log("felkod 409 ")
        } else {
          console.log("Något annat gick fel!")
        }

      } catch (error) {
        console.log("Ett fel inträffade ", error)
      }

      
    }
  })


  return (
    <>
    <section className="messageUs section">
          <div className="container">
            <h2>
              Leave us a message<br />
              for any information.
            </h2>

            {messageSent && (
            <div className="messageSent">
              We have recieved your message successfully, thank you!
            </div>
            )}              

      <form id="contactForm" noValidate onSubmit={form.handleSubmit}>
        <div className="inputField">
          <p className="error">{(form.errors.name && form.touched.name) ? form.errors.name : ""}</p>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              id="name"
              tabIndex="1"
              required
              value = {form.values.name} 
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>

          <div className="inputField">
          <p className="error">{(form.errors.email && form.touched.email) ? form.errors.email : ""}</p>

            <input
              type="email"
              name="email"
              placeholder="Email *"
              id="email"
              tabIndex="2"
              required
              value = {form.values.email} 
              onChange={(form.handleChange)}
              onBlur={form.handleBlur}
            />
          </div>

          <div className="inputField">
          <p className="error">{(form.errors.message && form.touched.message) ? form.errors.message : ""}</p>

            <textarea
              name="message"
              id="message"
              cols="15"
              rows="5"
              placeholder="Your Message *"
              tabIndex="3"
              required
              value = {form.values.message} 
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            ></textarea>
          </div>
        <button className="buttonTheme" type="submit" tabIndex="4">
          Send Message <i className="fa-solid fa-arrow-up-right arrow"></i>
        </button>
      </form>
      </div>
      </section>
    </>
  );
};

export default MessageUsForm;
