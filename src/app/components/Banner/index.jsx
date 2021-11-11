import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"


import "./style.scss";

import slide4 from "../../../assets/images/slide/bg4.jpg";
import slide5  from "../../../assets/images/slide/bg5.jpg";
import slide3  from "../../../assets/images/slide/bg3.jpg";


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';


SwiperCore.use([Navigation]);

function Banner(props) {
    return (
        <div>
        <Swiper navigation={true} className="mySwiper">
        <SwiperSlide><img src={slide3}  alt ="bg1"  width="1205px" /></SwiperSlide>
        <SwiperSlide><img src={slide4}  alt ="bg2" width="1205px"  /></SwiperSlide>
        <SwiperSlide><img src={slide5}  alt ="bg3"  width="1205px" /></SwiperSlide>
        
       
        </Swiper>
        </div>
    );
}

export default Banner;