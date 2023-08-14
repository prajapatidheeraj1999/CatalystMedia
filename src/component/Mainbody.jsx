import React, { useEffect, useState } from "react";
import "../style/mainbody.css";
import { useSelector } from "react-redux";

import Carts from "./Carts";
import Pagination from "./Pagination";
const Mainbody = () => {
  let [product, setproduct] = useState([]);
  let [page, setpage] = useState(1);
  let [totalpage, settotalpage] = useState(4);

  let data = useSelector((store) => store.product_reducer.product);

  let changpage = (el) => {
    setpage(el);
    console.log(el);
  };

  useEffect(() => {
    let maindata = data.slice((page - 1) * 6, (page - 1) * 6 + 6);
    setproduct(maindata);
    console.log("useEfect is working");
  }, [data, page]);
  console.log("this is mainbody page", product);
  return (
    <div id="maincantainer">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        {product?.map((el) => (
          <Carts
            key={el.id}
            names={el.name}
            colorId={el.colorId}
            image={el.image}
            materialId={el.materialId}
            price={el.price}
            id={el.id}
          />
        ))}
      </div>
      <div style={{ marginLeft: "40%" }}>
        <Pagination totalpage={totalpage} changpage={changpage} />
      </div>
    </div>
  );
};

export default Mainbody;
