import React from "react";
import "../style/navbar.css";
import cart from "../image/mdi_cart-outline.svg";
import { useSelector } from "react-redux";
import Cartdrower from "./Cartdrower";
import { ChakraProvider } from "@chakra-ui/react";
const Navbar = () => {
  let carts = useSelector((store) => store.cart_reducer.cart);
  console.log("this is carts", carts);
  return (
    <div id="container">
      <div>
        <span class="right">RIGHT</span>
        <span class="fit">FIT</span>
        <span class="com">.COM</span>
      </div>
      <div>
        <div>All Products</div>
        <div>Featured Producs</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>
            <Cartdrower />
          </span>
          <span style={{ marginLeft: "10px", color: "white" }}>
            {carts.length}
          </span>
          {/* <div><img src={cart} alt="" /></div>
            <div>0</div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
