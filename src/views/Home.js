import React from 'react'
import Header from "../components/headerSection/Header";
import Showcase from '../components/home/showcaseSection/Showcase';
import Companies from "../components/home/companySection/Companies";
import Features from '../components/home/featuresSection/Features';
import OurServices from '../components/home/ourServices/OurServices';
import WhyChooseUs from "../components/home/whyChooseUs/WhyChooseUs";
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
    <Header />
    <Showcase />
    <Companies />
    <Features />
    <OurServices />
    <WhyChooseUs />
    <Footer />
    </>
  )
}

export default Home