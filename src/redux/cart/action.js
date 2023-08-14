

import {CART_SUCCESS} from "./action_type"

export  let addcart=(data)=>(dispatch)=>{
   console.log(data)
      
      dispatch({type:CART_SUCCESS,payload:data})
  }