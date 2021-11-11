import React from "react";

import {Link,useRouteMatch} from "react-router-dom";
import "./style.scss";
Product.propTypes = {};

function Product({ name, price, url, keycode, dis, cate, status, key, id }) {
  const news = status.find((sale) => sale === "new");
 // const params = useRouteMatch().params.id;
  return (
    <div className="popular-item">
      <div className="box">
        <img
          src={url}
          alt={keycode}
          className="thumnail"
         // width="370px"
         // height="493.33px"
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
