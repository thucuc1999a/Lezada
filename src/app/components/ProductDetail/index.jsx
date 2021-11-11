import React from "react";

import {Link} from "react-router-dom";
import "./style2.scss";
Product.propTypes = {};

function Product({ name, price, url, keycode, dis, cate, status, key, id }) {
  const news = status.find((sale) => sale === "new");
  return (
    <div className="popular-item_all">
      <div className="box">
        <img
          src={url}
          alt={keycode}
          className="thumnail1"
         width="195px"
         height="260px"
        />
       

        <ul className="label-cycle">
          <li className="label-item">
            {dis > 0 ? (
              <div className="new-item">
                <p className="text-label">-{dis} %</p>{" "}
              </div>
            ) : null}
          </li>
          <li className="label-item">
            {" "}
            {news ? (
              <div className="new-item">
                <p className="text-label-red"> new</p>
              </div>
            ) : null}
          </li>
        </ul>
        <Link to={`/products/${id}`} className="text-name">{name}</Link>

        
        <p className="text-price"> $ {price}</p>
        <div className="overlay">
          <a className="add-to-cart" href="#">
            +Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
