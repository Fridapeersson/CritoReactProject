import React from 'react'
import Header from "../components/headerSection/Header";
import Footer from '../components/footer/Footer'
import Connect from '../components/contact/Connect';
import SecondaryHeader from '../components/news/SecondaryHeader';
import MessageUsForm from '../components/contact/MessageUsForm';

const Contact = () => {
  return (
    <>
        <Header />
        <Connect />
        <Footer />
    </>
  )
}

export default Contact