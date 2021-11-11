import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import detail_banner from "./../../../../../assets/images/cta/shop-bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {useState } from "react";
import AddToCartForm from "../../../../components/AddToCartForm";
// Import Swiper styles
// import Swiper core and required modules
import SwiperCore, { Pagination, Thumbs } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Thumbs]);

function Detail({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const news=data.status.find((s)=>s.status ==="new");
  const news = data.status;
  const handleAddtoCartForm =(formValues)=>{
  
    console.log('Form submit',formValues)
  }
  return (
    <div className="container">
      <div className="banner-side">
        <img className="banner-side-img" src={detail_banner} alt="banner" />
      </div>
      <div className="grid wide detail_page">
        <div className="row detail_page_wrapper">
          <div className="col l-6 sidebar">
            <div className="side_slide">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#666",
                  "--swiper-navigation-size": "20px",
                  "--swiper-pagination-color": "#666",
                  "--swiper-pagination-size": "20px",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper_slide"
              >
                <SwiperSlide>
                  <img
                    className="thumnail"
                    src={data.thumnailUrl}
                    alt="thumnail"
                  />

                  <ul className="label-cycle">
                    <li className="label-item">
                      {data.discount > 0 ? (
                        <div className="new-item">
                          <p className="text-label">-{data.discount} %</p>{" "}
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
                </SwiperSlide>
                
              </Swiper>
            </div>
            <div className="side_thumbnail">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                //navigation={true}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper1"
              >
                <SwiperSlide>
                  <img
                    className="thumnail_carousel"
                    src={data.thumnailUrl}
                    alt="thumnail"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="thumnail_carousel"
                    src={data.thumnailUrl}
                    alt="thumnail"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="thumnail_carousel"
                    src={data.thumnailUrl}
                    alt="thumnail"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="thumnail_carousel"
                    src={data.thumnailUrl}
                    alt="thumnail"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col l-6 detail_product">
            <div className="start_vote">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star "></span>
              <Link to="/" className="text-review">
                {" "}
                (10 customer reviews){" "}
              </Link>
            </div>
            <h2 className="name-product"> {data.name_product}</h2>
            <p className="price-product"> {data.sale_price}</p>
            <p className="desc_text">{data.description}</p>
            <div className="quantity">
             Quantity 
             <div className="add_button">
             <AddToCartForm  onSubmit={handleAddtoCartForm}/>
 
               <button className="whislist_add">
                 <i className="fa far fa-heart"></i>
               </button>
             </div>
           
            </div>
           
            <div className="line"></div>

            <table className="view_detail">
              <tr>
                <td className="left_col"> SKU </td>
                <td className="right_col">{data.key} </td>
              </tr>
              <tr>
                <td className="left_col">Categories</td>
                <td className="right_col">{data.cate}</td>
              </tr>
              <tr>
                <td className="left_col">Tags</td>
                <td className="right_col">{data.key}</td>
              </tr>
              <tr>
                <td className="left_col share">Share on</td>
                <td className="right_col share">
                  {" "}
                  <i className="fa fa-fab fa-youtube"></i>
                  <i className="fa fa-fab fa-instagram"></i>
                  <i className="fa fa-fab fa-facebook"></i>
                  <i className="fa fa-fab fa-twitter"></i>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
