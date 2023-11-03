import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { Link } from "react-router-dom";
import TextComponent from "./TextComponent";
import "./ArticlesFooter.scss";

const ArticlesFooter = () => {
  const formatDate = (publishedDate) => {
    const date = new Date(publishedDate);
    const day = date.getDate();
    return `${day}`;
  };

  const formatMonth = (publishedDate) => {
    const date = new Date(publishedDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    return `${month}`;
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await fetch(
      "https://win23-assignment.azurewebsites.net/api/articles"
    );
    if (response.status === 200) {
      const data = await response.json();
      setArticles(data);
      console.log(data);
    }
  };

  return (
    <>
    <section className="articleFooterSection">
      <div className="container">
        <div className="articleAndNews">
          <div className="sectionTitleWithButton">
            <div className="sectionTitle">
              <SectionTitle
              title="Article & News"
              description="Get Every Single Article & News"
            />
          </div>
        <div className="btn">
          <Button type="" text="Browse Articles" url="/news" />
        </div>
      </div>
      <article className="articles">

        {articles.slice(3, 6).map((article) => (
          <div className="article" key={article.id}>
            <Link to={`/news/${article.id}`}>
              <div className="imgContainer">
                <img src={article.imageUrl} />
                <p>
                  <span>{formatDate(article.published)}</span>
                  {formatMonth(article.published)}
                </p>
              </div>

              <div className="articleText">
                <p>{article.category}</p>
                <TextComponent
                  title={article.title}
                  description={article.content}
                />
              </div>
            </Link>
          </div>
        ))}
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
      
    </>
  );
};

export default ArticlesFooter;
