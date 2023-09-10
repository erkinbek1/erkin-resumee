import React from "react";
import "../Footer/Footer.css";
import footer1 from "../IMAGES/footer-icon1.png";
import footer2 from "../IMAGES/footer-icon2.png";
import footer3 from "../IMAGES/footer-icon3.png";
import footer4 from "../IMAGES/footer-icon4.png";

const Footer = () => {
  return (
    <div>
      {/* FOOTER START */}
      <footer class="footer__container">
        <div class="footer__container_first">
          <div>
            <img src={footer1} alt="footer error" />
            <p>hello@reallygreatsite.com</p>
          </div>
          <div>
            <img src={footer2} alt="footer error" />
            <p>+123-456-7890</p>
          </div>
        </div>
        <div class="footer__container_second">
          <div>
            <img src={footer3} alt="footer error" />
            <p>123 Anywhere St., Any City</p>
          </div>
          <div>
            <img src={footer4} alt="footer error" />
            <p>www.reallygreatsite.com</p>
          </div>
        </div>
      </footer>
      {/* FOOTER END */}
    </div>
  );
};

export default Footer;
