import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const NavbarLine = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-link">
          <Link to="/">
            <button className="navbar-button">
              <i className="far fa-solid fa-house"></i>
              <br></br>Home
            </button>
          </Link>
        </div>
        <div className="navbar-link">
          <NavLink to="/general">
            <button className="navbar-button">
              <i className="far fa-solid fa-newspaper"></i>
              <br></br>General
            </button>
          </NavLink>
        </div>
        <div className="navbar-link">
          <NavLink to="/business">
            <button className="navbar-button">
              <i className="far fa-solid fa-briefcase"></i>
              <br></br>Business
            </button>
          </NavLink>
        </div>
        <div className="navbar-link">
          <NavLink to="/health">
            <button className="navbar-button">
              <i className="far fa-solid fa-notes-medical"></i>
              <br></br>Health
            </button>
          </NavLink>
        </div>
        <div className="navbar-link">
          <NavLink to="/science">
            <button className="navbar-button">
              <i className="far fa-solid fa-microscope"></i>
              <br></br>Science
            </button>
          </NavLink>
        </div>
        <div className="navbar-link">
          <NavLink to="/sports">
            <button className="navbar-button">
              <i className="far fa-solid fa-futbol"></i>
              <br></br>Sports
            </button>
          </NavLink>
        </div>
        <div className="navbar-link">
          <NavLink to="/technology">
            <button className="navbar-button">
              <i className="far fa-solid fa-microchip"></i>
              <br></br>Technology
            </button>
          </NavLink>
        </div>
        <div className="navbar-link">
          <NavLink to="/favourites">
            <button className="navbar-button">
              <i className="far fa-solid fa-star"></i>
              <br></br>Favourites
            </button>
          </NavLink>
        </div>
        <div className="navbar-link">
          <NavLink to="/search">
            <button className="navbar-button">
              <i className="far fa-solid fa-magnifying-glass"></i>
              <br></br>Search
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavbarLine);
