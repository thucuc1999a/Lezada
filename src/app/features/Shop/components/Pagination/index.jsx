import React from "react";
import "./style.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const HandleClickPage = () => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const line = $(".page-item .line");
    const tabActive = $(".page-link.active");
    

    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";

    const tabs = $$(".page-link");
    tabs.forEach((tab, index) => {
      tab.onclick = function () {
        $(".page-link.active").classList.remove("active");

         line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        
        this.classList.add("active");
       
      };
    });
  };


  return (
    <div className="wrapper-pagination">
      <ul className="pagination">
     
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number) } href="!#" className="page-link active"
            >
              {number}
            </a>
            
          </li>
        ))}
      </ul>
     
      </div>
     
    
  );
};

export default Pagination;
