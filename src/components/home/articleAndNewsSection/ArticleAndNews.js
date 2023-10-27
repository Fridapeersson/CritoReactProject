import React from "react";
import "./ArticleAndNews.scss";
import article1Img from "../../../assets/images/articleAndNews/article1Img (1).jpeg";
import article2Img from "../../../assets/images/articleAndNews/article2Img (1).jpeg";
import article3Img from "../../../assets/images/articleAndNews/article3Img (1).jpeg";
import ArticleBoxes from "./ArticleBoxes";
import SectionTitle from "../../../generics/SectionTitle";
import Button from "../../../generics/Button";

const ArticleAndNews = () => {

    const articleBoxes = [
        {url: "/articleandnews/digitalizationinclassroom", image: article1Img, imageAltText: "Girl", date: "25", title: "How To Use Digitalization In The Classroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},

        {url: "/articleandnews/implementchatgpt", image: article2Img, imageAltText: "chatgpt", date: "17",  title: "How To Implement ChatGpt In Your Projects", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        
        {url: "/articleandnews/moderncssdesign", image: article3Img, imageAltText: "Books", date: "13", title: "The Guide To Support modern CSS Design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."}
    ]

  return (
    <section className="articleAndNewsSection section">
      <div className="container">
        <div className="articleAndNews">
          <div className="sectionTitleWithButton">
            <div className="sectionTitle">
                <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
            </div>
            <div className="btn">
                <Button url="/articleandnews/browsearticles" type="" text="Browse Articles" />
            </div>
          </div>

          <article className="articles">
            {
                articleBoxes.map((article, index) => (
                    <ArticleBoxes key={index} url={article.url} image={article.image} imageAltText={article.imageAltText} date={article.date} title={article.title} description={article.description} />
                ))
            }
          </article>

          <div className="dots">
            <div className="dot blackDot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleAndNews;
