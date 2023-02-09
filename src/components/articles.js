import searchedArticlesArray from "./global data/searchedArticles";

const Articles = (props) => {
  searchedArticlesArray.splice(0, searchedArticlesArray.length);
  props.articles.map((article, index) => {
    searchedArticlesArray.push(article);
  });
};

export default Articles;
