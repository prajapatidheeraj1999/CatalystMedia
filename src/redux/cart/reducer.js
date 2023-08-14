import {CART_SUCCESS} from "./action_type"

let initial={
    cart:[],
}

export let reducer=(state=initial,{type,payload})=>{

    switch(type)
    {
        case CART_SUCCESS:{
            return {...state,cart:payload}
        }
        default: return state
    }
}