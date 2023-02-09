import React from "react";
import axios from "axios";
import SearchInput from "./components/header";
import Navbar from "./components/navbar";
import Articles from "./components/articles";
import "./scss/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(entry) {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${entry}&apiKey=661cbd66ab42409e912f432b860e6861`
    );
    console.log(response.data);

    this.setState({ articles: response.data.articles });
    console.log(this.state.articles);
  }

  render() {
    return (
      <div className="main-container">
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <Navbar />
        <Articles articles={this.state.articles} />
       
      </div>
    );
  }
}

export default App;
