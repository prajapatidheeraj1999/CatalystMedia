
import axios from "axios"
import {COLOR_REQUEST,COLOR_SUCCESS,COLOR_FAILURE} from "./action_type"
let authToken="Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo"
export  let getcolor=(dispatch)=>{
    axios.get("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors",{
      headers:{
        "Authorization":`Bearer ${authToken}`
      }
    })
    .then((res)=>{
      
      dispatch({type:COLOR_SUCCESS,payload:res.data.colors})})
    .catch((error)=>dispatch({type:COLOR_FAILURE}))
  }