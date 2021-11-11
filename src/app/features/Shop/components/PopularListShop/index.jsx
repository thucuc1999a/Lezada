import React from "react";

import "./style.scss";
import ProductInShop from "../../../../components/ProductInShop";

PopularList.propTypes = {};

function PopularList({ popularList }) {
  return (
    <div className="grid wide list-wrapper">
      <div className="row list">
     
        {popularList.map((val) => (
          <div className="list-item">
          <ProductInShop 
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
