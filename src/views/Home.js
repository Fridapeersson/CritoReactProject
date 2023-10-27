import React from 'react'
import Header from "../components/headerSection/Header";
import Showcase from '../components/home/showcaseSection/Showcase';
import Companies from "../components/home/companySection/Companies";
import Features from '../components/home/featuresSection/Features';
import AboutCompany from '../components/home/aboutCompanySection/AboutCompany';
import OurServices from '../components/home/ourServices/OurServices';
import WhyChooseUs from "../components/home/whyChooseUs/WhyChooseUs";
import Footer from '../components/footer/Footer';
import SectionTitle from '../generics/SectionTitle';
import ProjectAndCase from '../components/home/projectAndCaseSection/ProjectAndCase';
import MeetOurTeam from '../components/home/meetOurTeamSection/MeetOurTeam';
import ArticleAndNews from '../components/home/articleAndNewsSection/ArticleAndNews';
import GetNewsBySignup from '../components/home/getNewsBySignup/GetNewsBySignup';

const Home = () => {
  return (
    <>
    <Header />
    <Showcase />
    <Companies />
    <Features />
    <AboutCompany />
    <OurServices />
    <WhyChooseUs />
    <ProjectAndCase />
    <MeetOurTeam />
    <ArticleAndNews />
    <GetNewsBySignup />
    <Footer />
    </>
  )
}

export default Home