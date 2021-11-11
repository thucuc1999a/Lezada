import React from 'react';
import Product from '../../../../components/Product';


function AllProduct({listall}) {
    return (
        <div className="grid wide list-wrapper">
      <div className="row list">
        {listall
          .map((val) => (
          <div className="col l-3 m-6 c-6">
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

export default AllProduct;