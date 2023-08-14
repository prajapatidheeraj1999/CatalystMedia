import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { addcart } from "../redux/cart/action.js";
const Addtocart = ({ image, id, name, colorId, materialId, price }) => {
  let dispatch = useDispatch();
  let maindata = useSelector((store) => store.cart_reducer.cart);
  let deletecart = () => {
    console.log("i want to delete data", maindata, id);
    let data = maindata.filter((el) => el.id != id);
    localStorage.setItem("right_fit_cart", JSON.stringify(data));

    dispatch(addcart(data));
    console.log(data);
  };
  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
      <div style={{ border: "1px solid red" }}>
        <img src={image} alt="" width={"100px"} />
      </div>
      <div>
        <div>{name}</div>
        <div>
          <span>{colorId}</span> <span>materialId</span>
        </div>
        <div>INR {price}</div>
        <button onClick={deletecart} style={{ marginTop: "20px" }}>
          remove
        </button>
      </div>
    </div>
  );
};

export default Addtocart;
