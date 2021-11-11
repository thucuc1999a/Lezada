import React from "react";

import "./style1.scss";
import { Link} from "react-router-dom";


function ProductInShop({ name, price, url, keycode, dis, cate, status,key,id }) {

  return (
    <div className="popular-item_shop">
      <div className="box">
        <img
          src={url}
          alt={keycode}
          className="thumnail"
          // width="370px"
          // height="493.33px"
        />
      </div>
      <div className="info">
      <Link to={`/products/${id}`} className="text-name">{name}</Link>
        <p className="text-price"> $ {price}</p>
      </div>
    </div>
  );
}

export default ProductInShop;
