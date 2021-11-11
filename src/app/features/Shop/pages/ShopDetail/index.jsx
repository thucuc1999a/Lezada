import React from "react";
import PropTypes from "prop-types";
import sidebar from "../../../../../assets/images/cta/shop-bg.png";
import "./style.scss";
import api from "../../../../api/axiosService";
import Categories from "../../components/Categories";
import { useState, useEffect } from "react";

import FilterColor from "../../components/FilterColor";
import PopularListShop from "../../../Shop/components/PopularListShop";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
//import ProductDetail from "./../../../../components/ProductDetail";
import ProductDetail from "./../../../../components/ProductDetail";

//import Pagination from "./../../components/Pagination";
const useStyles = makeStyles(theme => ({
  
  
  paginator: {
    justifyContent: "center",
    padding: "10px"
  }
}));
ShopDetail.propTypes = {};

function ShopDetail(props) {
  const [category, setCategory] = useState([]);
  const [allproduct, setAllproduct] = useState([]);
  const [color, setColor] = useState([]);
  const [popItem, setPopItem] = useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemPerPage = 4;
  const classes = useStyles();
  useEffect(() => {
    const endpoint = "/product";
    const fetchData = async () => {
      const result = await api.get(endpoint);
      


      let saleItem = result.map((product) => {
        return product.cate;
      });
      let colorItem = result.map((product) => {
        return product.color;
      });
      let pop = result.filter((product) => {
        return product.status.some((val) => val === "pop");
      });
      let flatColorArray = colorItem.reduce(function (flatOut, item) {
        return flatOut.concat(item);
      }, []);
      const unique = Array.from(new Set(saleItem));
      const uniqueColor = Array.from(new Set(flatColorArray));
      

      setCategory(unique);
      setAllproduct(result);

      setColor(uniqueColor);
      setPopItem(pop);
      
     
      
    };
    fetchData();
    
    
    
  }, []);
  const noOfPages = Math.ceil(allproduct.length / itemPerPage);
  
  
  
 
  
  
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
 
 

  return (
    <div className="shop-detail">
      <div className="shop-detail-wrapper">
        <div className="shop-detail-sidebar">
          <div className="sidebar-image">
            <img src={sidebar} className="side" width="1300px" height="380px" />
            <div className="side-title">
              <h2 className="h2-title"> Left Sidebar</h2>
              <p className="text-title"> Home/ Shop</p>
            </div>
          </div>
        </div>
        <div className="shop-detail_header">
          <p className="show-result">Show {itemPerPage} of {allproduct.length} results</p>

          <div className="drop-down">
            <select className="filter-price">
              <option value="lowtohight">Default</option>
              <option value="lowtohight">Low to Hight</option>
              <option value="lowtohight">Low to Hight</option>
            </select>
          </div>
          <div className="filter">
            <a href="#" className="item">
              <i className="fa fa-fas fa-list"></i>
            </a>
            <a href="#" className="item active">
              <i className="fa fa-fas fa-th"></i>
            </a>
            <a href="#" className="item">
              {" "}
              <i className="fa fa-fas fa-angle-double-down"> Filter</i>
            </a>
          </div>
        </div>
        <div className="shop-detail_content">
          <div className="grid wide grid_content">
            <div className="row row-content">
              <div className="col l-3 left-detail">
                <div className="left-search">
                  <input className="search"></input>
                  <a href="#" className="search-item">
                    {" "}
                    <i className="fa fa-fas fa-search"></i>{" "}
                  </a>
                </div>
                <div className="left-categories">
                  <h2 className="left-categories__text">Categories</h2>
                  <Categories listCate={category} />
                </div>
                <div className="left-filter_color">
                  <h2>Colors</h2>
                  <FilterColor filter={color} />{" "}
                </div>
                <div className="left-pop_product">
                  <h2 className="left-pop__text">Popular Product</h2>
                  <PopularListShop popularList={popItem} />
                </div>
                <div className="left-tags"></div>
              </div>
              <div className="col l-9 right-detail">
               
                <div className="grid wide list-wrapper">
                <div className="row list">
                  {allproduct.slice((currentPage - 1) * itemPerPage,currentPage * itemPerPage)
                    .map((val) => (
                    <div className="col l-3 m-6 c-6">
                    <ProductDetail
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
              
               <Pagination
               count={noOfPages}
               page={currentPage}
               onChange={handleChange}
               defaultPage={1}
               color="secondary"
               size="small"
               showFirstButton
               showLastButton
               classes={{ ul: classes.paginator }}
            />
            
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetail;
