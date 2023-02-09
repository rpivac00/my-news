import React, { useState, useEffect } from "react";
import axios from "axios";
import LatestNewsWidget from "../latestNewsWidget";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addFavourite from "../global data/favourite-function";
const Business = () => {
  const [data, setData] = useState([]);

  const getNews = async () => {
    await axios
      .get(
        `https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=5Mzr2Dy7me2rLZT4uwoPTK7jVh5opui5`
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <div className="section-container">
        <ToastContainer />
        <h3 className="section-container-header">BUSINESS</h3>

        <div className="news-wrapper">
          {data.map((article, index) => {
            return (
              <div key={index} className="article-card">
                <button
                  onClick={function () {
                    addFavourite(article);
                  }}
                  className="article-card-favourites-button"
                >
                  <i className="fas fa-thin fa-star"></i>
                </button>

                <div className="article-card-description">
                  <strong className="article-card-description-title">
                    {article.title.toUpperCase()}
                  </strong>
                  <br></br>
                  <br></br>

                  <p className="article-card-description-author">
                    {article.byline.toLowerCase()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <LatestNewsWidget />
    </div>
  );
};

export default Business;
