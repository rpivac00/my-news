import React from "react";
import RenderUI from "../renderUI";
import LatestNewsWidget from "../latestNewsWidget";
const Home = () => {
  return (
    <div className="news-container">
      <RenderUI />
      <LatestNewsWidget />
    </div>
  );
};

export default Home;
