import React, { useState, useEffect } from "react";
import axios from "axios";

function LatestNewsWidget() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getNews = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/everything?q=world&sortBy=publishedAt&apiKey=661cbd66ab42409e912f432b860e6861&page=${page}`
      )
      .then((response) => {
        setData((prev) => [...prev, ...response.data.articles]);
      });
  };
  useEffect(() => {
    getNews();
  }, [page]);

  useEffect(() => {
    const widgetDiv = document.getElementById("myDiv");

    const handleScroll = () => {
      var style = window.getComputedStyle(widgetDiv, null);
      style.getPropertyValue("height");
      if (
        widgetDiv.scrollTop +
          parseFloat(style.getPropertyValue("height")) +
          30 >
        widgetDiv.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };

    widgetDiv.addEventListener("scroll", handleScroll);
    return () => widgetDiv.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="myDiv" className="widget-container">
      <ul>
        <h3 className="widget-container-title">Latest News</h3>
        <br></br>

        {data.map((article, index) => {
          return (
            <div key={index} className="widget-container-item">
              <strong>{article.publishedAt.slice(11, 16)}</strong>
              <br></br>
              <br></br>
              <h4>{article.title}</h4>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default LatestNewsWidget;
