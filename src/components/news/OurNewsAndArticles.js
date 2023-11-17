import React from "react";
import "./OurNewsAndArticles.scss";
import { Link } from "react-router-dom";
import getNewsBySignUp from "../home/getNewsBySignup/GetNewsBySignup";
import "../home/getNewsBySignup/GetNewsBySignup.scss";
import TextComponent from "../../generics/TextComponent";
import { useArticles } from "../../context/ArticleContext";

const OurNewsAndArticles = () => {
  const formatDate = (publishedDate) => {
    const date = new Date(publishedDate);
    const day = date.getDate();
    return `${day}`;
  };

  const formatMonth = (publishedDate) => {
    const date = new Date(publishedDate);
    const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const month = monthNames[date.getMonth()];
    return `${month}`;
  };

  const { articles } = useArticles();

  return (
    <>
      <section className="ourNewsAndArticleSection">
        <div className="container">
          <div className="ourNewsAndArticles">
            <article className="articles">
              {articles.map((article) => (
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
            <div className="changePage">
              <div>
                <Link to="#">
                  <i className="fa-solid fa-less-than"></i>
                </Link>
              </div>
              <div className="active box">
                <Link to="#">1</Link>
              </div>
              <div className="box">
                <Link to="#">2</Link>
              </div>
              <div className="box">
                <Link to="#">3</Link>
              </div>
              <div className="box">
                <Link to="#">...</Link>
              </div>
              <div className="box">
                <Link to="#">9</Link>
              </div>
              <div>
                <Link to="#">
                  <i className="fa-solid fa-greater-than"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {getNewsBySignUp()}
      </section>
    </>
  );
};

export default OurNewsAndArticles;
