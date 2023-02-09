import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addFavourite from "./global data/favourite-function";

function RenderUI() {
  const [data, setData] = useState([]);

  const getNews = () => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=5Mzr2Dy7me2rLZT4uwoPTK7jVh5opui5`
      )
      .then((response) => {
        setData(response.data.results);
      });
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="section-container">
      <ToastContainer />
      <h3 className="section-container-header">HOME</h3>
      <div className="news-wrapper">
        {data.map((article, index) => {
          return (
            <div key={index} className="article-card">
              <input type="checkbox" id="check" className="checkbox" hidden />
              <label htmlFor="check" className="article-card-favourites">
                <button
                  onClick={function () {
                    addFavourite(article);
                  }}
                  className="article-card-favourites-button"
                  id="article-card-favourites-button"
                >
                  <i className="fas fa-thin fa-star" id="star"></i>
                </button>
              </label>
              <img
                src={`${article.multimedia[1].url}`}
                alt="home"
                className="article-card-img"
              />

              <div className="article-card-description">
                <strong className="article-card-description-title">
                  {article.title.toUpperCase()}
                </strong>
                <br></br>
                <br></br>

                <p className="article-card-description-author">
                  {article.byline}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RenderUI;
