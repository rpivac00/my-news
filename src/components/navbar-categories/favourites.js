import React, { useState } from "react";
import favouritesArray from "../global data/favouritesArray";
import LatestNewsWidget from "../latestNewsWidget";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favourites = () => {
  let [counter, setCounter] = useState(1);

  const removeFavourite = (fav, ind) => {
    favouritesArray.splice(ind, 1);
    toast("Article has been removed from favourites!");
    setCounter(++counter);
  };
  /*
local storage prototype
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favouritesArray));
  }, favouritesArray);
*/
  if (favouritesArray.length === 0) {
    return (
      <div className="section-container">
        <h3 className="section-container-header">
          There is still no favourites...
        </h3>
      </div>
    );
  } else {
    return (
      <div>
        <ToastContainer />
        <div className="section-container">
          <h3 className="section-container-header">FAVOURITES</h3>
          <div className="news-wrapper">
            {favouritesArray.map((article, index) => {
              return (
                <div key={index} className="article-card">
                  <button
                    onClick={function () {
                      removeFavourite(article, index);
                    }}
                    className="article-card-favourites-button"
                  >
                    <i className="far fa-solid fa-trash"></i>
                  </button>
                  <img
                    src={`${article.multimedia[2].url}`}
                    alt="favourite"
                    className="article-card-img"
                  />

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
  }
};

export default Favourites;
