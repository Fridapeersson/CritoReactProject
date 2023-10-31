import React from 'react'
import Header from '../components/headerSection/Header'
import Footer from '../components/footer/Footer'
import OurNewsAndArticles from "../components/news/OurNewsAndArticles";
import SecondaryHeader from '../components/news/SecondaryHeader';




const News = () => {
  return (
    <>
        <Header />
        {/* <h1>News</h1> */}
        <SecondaryHeader title="News & Articles" link="News" />
        <OurNewsAndArticles />
        <Footer />
    </>
  )
}

export default News