import {PRODUCT_REQUEST,PRODUCT_SUCCESS,PRODUCT_FAILURE} from "./action_type"

let initial={
    product:[],
    error:false
}

export let reducer=(state=initial,{type,payload})=>{
   

    switch(type)
    {
        case PRODUCT_SUCCESS:{
            return {...state,product:payload}
        }
        case PRODUCT_FAILURE:{
            return {...state,error:true}
        }

        default: return state
    }
}