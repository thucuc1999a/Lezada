import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Product from "../../../../../../../components/Product";
PopularList.propTypes = {};

function PopularList({ popularList }) {
  return (
    <div className="grid wide list-wrapper">
      <div className="row list">
     
        {popularList.map((val) => (
          <div className="col l-4 m-12 c-12 list-item">
          <Product 
            key={val.id}
            id={val.id}
            name={val.name_product}
            price={val.sale_price}
            url={val.thumnailUrl} 
            keycode={val.key}
            dis={val.discount}
            cate={val.cate}
            status={val.status}
          />
          </div>
        ))}
    
    </div>
    </div>
  );
}

export default PopularList;
