import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import sidebar from "./../../../../../assets/images/cta/shop-bg.png";
SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div className="side-bar-wrapper">
      <img src={sidebar} alt="side-bar"/>
      <div className="title">
        <h3>Shop Left Sidebar</h3>
        <p>Home/Shop Left Sidebar</p>
      </div>
    </div>
  );
}

export default SideBar;
