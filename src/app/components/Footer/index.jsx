import React from "react";
import "./style.scss";
import pay from "./../../../assets/images/logo/pay.png";
//import pay from "../../../../assets/images/logo/pay.png";
Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-space">
        <div className=" footer-left">
          <ul className="footer-menu">
            <li className="footer-item">about us</li>
            <li className="footer-item">store location</li>
            <li className="footer-item">contact</li>
            <li className="footer-item">support</li>
            <li className="footer-item">policy</li>
          </ul>
          <p className="copy-write">
            © 2021 lezada. All Rights Reserved |<b>(+00) 123 567990</b>  |
            contact@lezada.com
          </p>
        </div>
        <div className="footer-right">
          <ul className="footer-icon-social">
            <li className="footer-item-icon">
              <i className="fa fa-fab fa-instagram"></i>
            </li>
            <li className="footer-item-icon">
              <i className="fa fa-fab fa-twitter"></i>
            </li>
            <li className="footer-item-icon">
              <i className="fa fa-fab fa-facebook"></i>
            </li>
            <li className="footer-item-icon">
              <i className="fa fa-fab fa-youtube"></i>
            </li>
            
          </ul>
          <div className="img-payment">
         
          <img className="img-pay" src={pay} alt="PayMethod" align="center"/>
          </div>
          

          </div>
        </div>
      </div>
     
    
  );
}

export default Footer;
