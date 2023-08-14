import axios from "axios"
import {METERIAL_REQUEST,METERIAL_SUCCESS,METERIAL_FAILURE} from "./action_type"
let authToken="Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo"
export  let getmaterial=(dispatch)=>{
    axios.get("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material",{
      headers:{
        "Authorization":`Bearer ${authToken}`
      }
    })
    .then((res)=>{
      
      dispatch({type:METERIAL_SUCCESS,payload:res.data.material})})
    .catch((error)=>dispatch({type:METERIAL_FAILURE}))
  }