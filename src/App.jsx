import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcolor } from "./redux/color/action";
import { getmaterial } from "./redux/material/action";
import { getproduct } from "./redux/product/action";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import Mainbody from "./component/Mainbody";
import {addcart} from "./redux/cart/action"
function App() {
  let data=JSON.parse(localStorage.getItem("right_fit_cart"))||[]
  
  let dispatch = useDispatch();
console.log(data)

    dispatch(addcart(data))
    getcolor(dispatch);
    getmaterial(dispatch);
    getproduct(dispatch);
  
  return (
    <div>
      <Navbar />
      <div style={{zIndex:1}}>
        <img
          src="https://s3-alpha-sig.figma.com/img/2c0a/c698/c200984ece39cf72eae95d0a61c92772?Expires=1692576000&Signature=nrKj2I6STOi58nwlVAP8Kq~i4UQW54XS~7B5M~J5NAuzeTbsWSKek-ZAM9~D2xLxPY4BpaHsySlhCdFLE9W930-XH4iQoKFgp4EV2We9nNOwp6~DhDM81eMGnzir14~1rpAzRdvK2~gt3UpGv6scQv0d~K8Iwc5~eqiAfeRCvA0TCyDr6Ws071w2psqQ80uYlNsevRqxLfMAHFW0M0JjSG1rBiLR7s0rGMVOITsBq5M~DaBDbPJOXqiqiWaSfmXlwDOiZDRbupj6wDDK5VT8uYVnWzp2XNXBJWbyeSED41FyZ5szokEWCZwHrrK1dsbs4ii8ZH5C2Fb2NXuw9KUSew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={"100%"}
          alt=""
        />
      </div>
      <div id="imagetext">
        <h1>Latest Styles</h1>
        <p>At Yesterday’s Prices</p>
        <button>BROWSE ALL STYLES</button>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "-25%",
          position:"relative",
          zIndex: 2,
          backgroundColor: "white",
        }}
      >
        <Slider />
        <Mainbody />
      </div>
      <Footer />
    </div>
  );
}

export default App;
