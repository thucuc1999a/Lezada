import React from "react";
import logo from "./../../../assets/images/logo/logo.png";
import "./style.scss";

import { NavLink} from "react-router-dom";


Header.propTypes = {};

function Header(props) {
  
  return (
    <div className="header">
      <div className=" grid wide header-wrapper">
        <div className="row header-container">
          <div className="col l-2 m-12 c-12 logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="col l-8 nav_bar">
            <ul className="nav_bar-menu">
              <li className="nav_bar-item">
              <NavLink to={`/`} className="nav-link" exact >
              Home
            </NavLink>
             
                <i className="fa fa-home fas fa-angle-down"></i>
               
              </li>
              <li className="nav_bar-item">
              <NavLink to={`/products`} className="nav-link" exact > Element</NavLink>

                <i className="fa fa-home fas fa-angle-down"></i>
              </li>
              <li className="nav_bar-item">
              <NavLink to={`/shop`} className="nav-link" exact >
             Shop
            </NavLink><i className="fa fa-home fas fa-angle-down"></i>
              </li>
              <li className="nav_bar-item">
              <NavLink to="/blogs" className="nav-link" exact >
              Blogs
             </NavLink>
                <i className="fa fa-home fas fa-angle-down"></i>
              </li>
              <li className="nav_bar-item">
              <NavLink to="/pages" className="nav-link" exact >
             Pages
            </NavLink>
                <i className="fa fa-home fas fa-angle-down"></i>
              </li>
            </ul>
          </div>
          <div className="col l-2 icon-right">
            <ul className="header-icon-content">
              <li className="header-icon-item">
                <i className="fa fa-homefas fa-search"></i>{" "}
              </li>
              <NavLink to="/authen" className="nav-link" exact >
              <li className="header-icon-item">
                <i className="fa fa-homefas fas fa-user" ></i>{" "}
              </li>
              
              </NavLink>
              <li className="header-icon-item">
                <i className="fa fa-homefas fa-heart"></i>
              </li>
              <li className="header-icon-item">
                <i className="fa fa-homefas fa-shopping-cart"></i>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
