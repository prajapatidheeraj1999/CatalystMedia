import React, { useState } from "react";
import { Button, Drawer } from "antd";
import cart from "../image/mdi_cart-outline.svg";
import { useSelector } from "react-redux";
import Addtocart from "./Addtocart";
const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  let cartdata = useSelector((store) => store.cart_reducer.cart);
  console.log("this is cartdrowers", cartdata);

  return (
    <div className="cart-container">
      <img src={cart} alt="" onClick={showDrawer} />
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer
        title="Shoping Cart"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {cartdata?.map((el) => (
          <Addtocart key={el.id} {...el} />
        ))}
      </Drawer>
    </div>
  );
};

export default CartDrawer;
