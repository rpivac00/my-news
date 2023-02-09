import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.entry);
    toast("Seached articles can be found in Search category");
  };

  render() {
    return (
      <div className="header-container">
        <h1 className="portal-name">MyNews</h1>
        <div className="form-container">
          <form onSubmit={this.onFormSubmit} className="form-search">
            <input
              type="text"
              placeholder="   🔍  Search News "
              onChange={(event) => this.setState({ entry: event.target.value })}
              value={this.state.entry}
            />

            <button className="form-search-button">SEARCH</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default SearchInput;
