import {METERIAL_REQUEST,METERIAL_SUCCESS,METERIAL_FAILURE} from "./action_type"

let initial={
    material:[],
    error:false
}

export let reducer=(state=initial,{type,payload})=>{

    switch(type)
    {
        case METERIAL_SUCCESS:{
            return {...state,material:payload}
        }
        case METERIAL_FAILURE:{
            return {...state,error:true}
        }

        default: return state
    }
}