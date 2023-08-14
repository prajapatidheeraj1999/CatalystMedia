import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/cart.css";
import { addcart } from "../redux/cart/action";
import uniqid from "uniqid";
const Carts = ({ names, colorId, id, image, materialId, price }) => {
  let color = useSelector((store) => store.coler_reducer.colors);
  let material = useSelector((store) => store.material_reducer.material);
  let colorname = color.find((el) => el.id == colorId);
  let materialname = material.find((el) => el.id == materialId);
  let maindata = useSelector((store) => store.cart_reducer.cart);
  let colornameorg, materialnameorg;
  if (colorname != undefined && materialname != undefined) {
    colornameorg = colorname.name;
    materialnameorg = materialname.name;
  }
  let cartdata = JSON.parse(localStorage.getItem("right_fit_cart")) || [];
  let dispatch = useDispatch();
  let addtocart = () => {
    let obj = {
      id: uniqid(),
      colorId: colornameorg,
      materialId: materialnameorg,
      price,
      image,
      name: names,
    };
    console.log(cartdata);
    cartdata = [...maindata, obj];
    console.log(cartdata);
    localStorage.setItem("right_fit_cart", JSON.stringify(cartdata));
    console.log(obj);
    dispatch(addcart(cartdata));
  };
  console.log(colorId, materialId, materialnameorg, colornameorg);
  console.log(color, material);
  return (
    <div>
      <div className="product-image-container">
        <img id="product_image" src={image} alt={names} onClick={addtocart} />
        <div id="add-to-cart" onClick={addtocart}>
          Add to Cart
        </div>
      </div>
      <h3>{names}</h3>
      <p>
        {" "}
        {colornameorg} {materialnameorg}
      </p>
      <p>INR {price}</p>
    </div>
  );
};

export default Carts;
