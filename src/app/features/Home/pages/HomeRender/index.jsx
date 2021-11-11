import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import api from "../../../../api/axiosService";
import { useState } from "react";
import cta from "../../../../../assets/images/cta/cabinet2.png";
import "./style.scss";
import NewList from "./../../../Home/components/HomeDetail/HomeProduct/New/NewList";
import SaleList from "./../../../Home/components/HomeDetail/HomeProduct/Sale/SaleList";
import PopularList from "./../../../Home/components/HomeDetail/HomeProduct/Poppular/PopularList";
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
//} from "react-router-dom";*/

HomeRender.propTypes = {};

function HomeRender(props) {
  const [popular, setPopular] = useState([]);
  const [newpro, setNewpro] = useState([]);
  const [salepro, setSalepro] = useState([]);
  useEffect(() => {
    const endpoint = "/product";
    const fetchData = async () => {
      const result = await api.get(endpoint);
      let pop = result.filter((product) => {
        return product.status.some((val) => val === "pop");
      });
      let newItem = result.filter((product) => {
        return product.status.some((val) => val === "new");
      });
      let saleItem = result.filter((product) => {
        return product.status.some((val) => val === "sale");
      });
      setPopular(pop);
      setNewpro(newItem);
      setSalepro(saleItem);
      console.log(pop);
    };
    fetchData();
  }, []);
  const HandleTabUi = () => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    //const tabActive = $(".tab-item.active");
    //const line = $(".tabs .line");

   // line.style.left = tabActive.offsetLeft + "px";
    //line.style.width = tabActive.offsetWidth + "px";

    tabs.forEach((tab, index) => {
      const pane = panes[index];

      tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        //line.style.left = this.offsetLeft + "px";
        //line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
      };
    });
  };
  return (
    <div className="container">
      <div className="tabs">
        <div className="tab-item">
          <a className="tab-icon" onClick={HandleTabUi}>
            {" "}
            New
          </a>
        </div>
        <div className="tab-item active">
          <a className="tab-icon ">Popular</a>
        </div>
        <div className="tab-item">
          <a className="tab-icon">Sale</a>
        </div>
        <div className="line"></div>
      </div>

      <div className="tab-content">
        <div className="tab-pane ">
          <NewList newList={newpro} />
        </div>
        <div className="tab-pane active">
          <PopularList popularList={popular} />
        </div>
        <div className="tab-pane">
          <SaleList saleList={salepro} />
        </div>
      </div>
     
    </div>
  );
}

export default HomeRender;
