import React from "react";
import footers from "../image/footer.png";
import digicert from "../image/digicert.png";
import "../style/footer.css";
const Footer = () => {
  return (
    <div id="footercontainer">
      <div>
        <div>
          <span class="right">RIGHT</span>
          <span class="fit">FIT</span>
          <span class="com">.COM</span>
        </div>
        <div id="footerabout">
          <p>Home</p>
          <p>All Products</p>
          <p>Featured Products</p>
          <p>Contact</p>
          <p>About Us</p>
        </div>
      </div>
      <div>
        <p id="footercontaint">
          We are a registered E-Commerce seller and we support a variety of
          Local and International payment modes
        </p>
        <img id="logo" src={footers} alt="" />
      </div>
      <div id="digi">
        <p>Website protected by</p>
        <img src={digicert} alt="" />
      </div>
    </div>
  );
};

export default Footer;
