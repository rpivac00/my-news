import React from "react";
import searchedArticlesArray from "../global data/searchedArticles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addFavourite from "../global data/favourite-function";
//
const Searching = () => {
  if (searchedArticlesArray.length === 0) {
    return (
      <div className="section-container">
        <h3 className="section-container-header">Search for articles above!</h3>
      </div>
    );
  } else {
    return (
      <div className="section-container">
        <ToastContainer />
        <h3 className="section-container-header">SEARCH</h3>
        <div className="news-wrapper">
          {searchedArticlesArray.map((article, index) => {
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
                  src={`${article.urlToImage}`}
                  alt="search"
                  className="article-card-img"
                />

                <div className="article-card-description">
                  <strong className="article-card-description-title">
                    {article.title}
                  </strong>
                  <br></br>
                  <br></br>

                  <p className="article-card-description-author">
                    {article.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Searching;
