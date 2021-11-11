import React from "react";
import PropTypes from "prop-types";
import Color from "./../Color";
import "./style.scss";
FilterColor.propTypes = {};

function FilterColor({ filter }) {
 // console.log(filter);

  return (
    <div className="filter-container">
      <div className="filter">
        {filter.map((index) => (
         <Color key={index} color={index} />
        ))}
      </div>
      
    </div>
  );
}

export default FilterColor;
