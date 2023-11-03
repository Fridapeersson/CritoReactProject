import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import NotFound from '../../views/NotFound';
import SecondaryHeader from './SecondaryHeader';
import Header from '../headerSection/Header';
import Footer from '../footer/Footer';
import "./ArticleDetails.scss";
import ReacentPosts from './RecentPosts';
// import ArticleBoxes from '../home/articleAndNewsSection/ArticleBoxes';
import ArticlesFooter from '../../generics/ArticlesFooter';
import Categories from './Categories';
import Links from './Links';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'


const ArticleDetails = () => {
  const [article, setArticle] = useState(null);

  const param = useParams();
  const id = param.id;
  console.log(id);

  // const {id} = useParams();

  
  const formatDayMonthYearDate = (publishedDate) => {
    const date = new Date(publishedDate);
    const day = date.getDate();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  const getArticle = async () => {
    if(id !== "" || id !== undefined) {
      const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
      if(response.status === 200) {
        const data = await response.json();
        setArticle(data);
        console.log(data);
      }
    }
  }
//ange id som dependens
    useEffect(() => {
      getArticle()
    }, [id]);

    const recentPosts = [
      {title: "How To Blow Through Capital At An Incredible Rate"},
      {title: "Design Studios That Everyone Should Know About?"},
      {title: "How did we get 1M+ visitors in 30 days without anything!"},
      // {title: "Figma On Figma: How We Built Our Website Design System"},
    ]

    const categories = [
      {title: "Technology", posts: "20"},
      {title: "Freelancing", posts: "07"},
      {title: "Writing", posts: "16"},
      {title: "Marketing", posts: "11"},
      {title: "Business", posts: "35"},
      {title: "Education", posts: "14"},
    ]

    const links = [
      {title: "Digitalization"},
      {title: "School"},
      {title: "IT"},
      {title: "Work"},
      {title: "Tech"}
    ]

  return article ?
   (
    <>
    <Header />
    <SecondaryHeader title="News & Articles" link="News" />
    <section className="articleDetailsSection">
      <div className="container">
        <div className="articleDetails">


          <div className="leftSide">
            <div className="articleTitle">
              <h1>{article.title}</h1>
            </div>

            <div className="subTitle">
              <p>{formatDayMonthYearDate(article.published)}</p>
              <div className="dot">.</div>
              <p>{article.category}</p>
              <div className="dot">.</div>
              <p>{article.author}</p>
            </div>
            <div className="img">
              <img src={article.imageUrl} />
            </div>

            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
              </p>
              <p>
                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. <br /> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
              </p>
              <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                </p>  
                <p>
                  Aenean nec lorem. In porttitor. Donec laoreetnonummy augue. <br /> Suspendisse dui purus,scelerisque at, vulputate vitae, pretiummattis, nunc. Mauris eget neque at semvenenatis eleifend. Ut nonummy.
                </p>

              <div className="textPop">
                
                <p><span>" </span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
</p>
            </div>

            {/* <Link>Digitalization</Link>
            <Link>School</Link>
            <Link>IT</Link>
            <Link>Design</Link>
            <Link>WOrk</Link>
            <Link>Tech</Link> */}
            <div className="links">
              {
                links.map((link, index) => (
                  <Links key={index} title={link.title}  />
                ))
              }
            </div>

          </div>

          <div className="rightSide">
            <div className="inputSearch">
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              <input placeholder="Type to search..." className="input" />
            </div>

            <div className="recentPosts box1">
              <h2>Recent posts</h2>
              {
                recentPosts.map((recentPost, index) => (
                  <ReacentPosts key={index} title={recentPost.title} url="#" />
                ))
              }
              <div className="posts">
                <Link to="#" className="link">
                  <h6 className="title">Figma On Figma: How We Built Our Website Design System</h6>
                  <div>
                    <p className="date">Jan 14, 2020</p>
                  </div>
                </Link>
              </div>
              {/* <div className="line"></div> */}
            </div>  

            <div className="box2">
              <div className="categories">
              <h2>Categories</h2>

                {
                  categories.map((category, index) => (
                    <Categories key={index} title={category.title} posts={category.posts} />
                  ))
                }
              </div>

            </div>

          </div>
        </div>



      </div>
      <div className="articleFooterContainer">
        <ArticlesFooter />
      </div>
    </section>
    <Footer />
    </>
  ) 
  :
  (
    <NotFound />
  )
}

export default ArticleDetails