
import axios from "axios"
import {PRODUCT_REQUEST,PRODUCT_SUCCESS,PRODUCT_FAILURE} from "./action_type"

let authToken="Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo"

export  let getproduct=(dispatch)=>{
    axios.get("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",{
      headers:{
        "Authorization":`Bearer ${authToken}`
      }
    })
    .then((res)=>{
      dispatch({type:PRODUCT_SUCCESS,payload:res.data.products})})
    .catch((error)=>dispatch({type:PRODUCT_FAILURE}))
  }