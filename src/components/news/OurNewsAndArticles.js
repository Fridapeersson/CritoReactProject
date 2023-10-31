import React from 'react'
import ArticleBoxes from '../home/articleAndNewsSection/ArticleBoxes';
import article1Img from "../../assets/images/articleAndNews/article1Img (1).jpeg";
import article2Img from "../../assets/images/articleAndNews/article2Img (1).jpeg"
import article3Img from "../../assets/images/articleAndNews/article3Img (1).jpeg";
import article4Img from "../../assets/images/news/ourNewsAndArticles/Image (4).jpeg";
import article5Img from "../../assets/images/news/ourNewsAndArticles/Image (5).jpeg";
import article6Img from "../../assets/images/news/ourNewsAndArticles/Image (6).jpeg";
import article7Img from "../../assets/images/projectAndCaseStudies/articleImage2.jpg";
import article8Img from "../../assets/images/projectAndCaseStudies/articleImage3.jpg";
import article9Img from "../../assets/images/projectAndCaseStudies/articleImage4.jpg";
import "./OurNewsAndArticles.scss";
import { Link } from 'react-router-dom';
import getNewsBySignUp from "../home/getNewsBySignup/GetNewsBySignup";
import "../home/getNewsBySignup/GetNewsBySignup.scss"
const OurNewsAndArticles = () => {

    const articleBoxes = [
        {url: "/articleandnews/digitalizationinclassroom", image: article1Img, imageAltText: "Girl", date: "25", month: "Mar", title: "How To Use Digitalization In The Classroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

        {url: "/articleandnews/implementchatgpt", image: article2Img, imageAltText: "chatgpt", date: "17", month: "Mar",  title: "How To Implement ChatGpt In Your Projects", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        
        {url: "/articleandnews/moderncssdesign", image: article3Img, imageAltText: "Books", date: "13", month: "Mar", title: "The Guide To Support modern CSS Design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        
        {url: "/articleandnews/moderncssdesign", image: article4Img, imageAltText: "people take notes in their pads", date: "12", month: "Mar", title: "Why You Need To Implement The Five S's", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        
        {url: "/articleandnews/moderncssdesign", image: article5Img, imageAltText: "Office view", date: "07", month: "Mar", title: "Get More Involved With Your End Users", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        
        {url: "/articleandnews/moderncssdesign", image: article6Img, imageAltText: "Office view", date: "02", month: "Mar", title: "Guided Tour Of Our New Head Office In Stockholm", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        
        {url: "/articleandnews/moderncssdesign", image: article7Img, imageAltText: "Books", date: "28", month: "Feb", title: "Using Business Intelligence To Get Insights Into Our Businesses", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        
        {url: "/articleandnews/moderncssdesign", image: article8Img, imageAltText: "Books", date: "18", month: "Feb", title: "Apple Has Released New Products. Are They Any Good?", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        
        {url: "/articleandnews/moderncssdesign", image: article9Img, imageAltText: "Books", date: "11", month: "Feb", title: "How To Improve Your Teams And Get A Better Result", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."}
    ];


  return (
    <>
      <section className="ourNewsAndArticleSection">
        <div className="container">
          <div className="ourNewsAndArticles">
              <article className="articles">
              {
                articleBoxes.map((article, index) => (
                  <div key={index} className="article">
                    <ArticleBoxes  url={article.url} image={article.image} imageAltText={article.imageAltText} date={article.date} month={article.month} title={article.title} description={article.description} />
                  </div>
                ))
              }
              </article>
              <div className="changePage">
                <div><Link to="#"><i className="fa-solid fa-less-than"></i></Link></div>
                <div className="active box"><Link to="#">1</Link></div>
                <div className="box"><Link to="#">2</Link></div>
                <div className="box"><Link to="#">3</Link></div>
                <div className="box"><Link to="#">...</Link></div>
                <div className="box"><Link to="#">9</Link></div>
                <div><Link to="#"><i className="fa-solid fa-greater-than"></i></Link></div>
              </div>
          </div>
        </div>
          {getNewsBySignUp()}
      </section>
    </>
  )
}

export default OurNewsAndArticles