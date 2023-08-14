import {COLOR_REQUEST,COLOR_SUCCESS,COLOR_FAILURE} from "./action_type"

let initial={
    colors:[],
    error:false
}

export let reducer=(state=initial,{type,payload})=>{

    switch(type)
    {
        case COLOR_SUCCESS:{
            return {...state,colors:payload}
        }
        case COLOR_FAILURE:{
            return {...state,error:true}
        }

        default: return state
    }
}