import {legacy_createStore,combineReducers,applyMiddleware} from "redux"

import thunk from "redux-thunk"

import {reducer as coler_reducer} from  "./color/reducer"
import {reducer as product_reducer} from "./product/reducer"
import {reducer as material_reducer} from "./material/reducer"
import {reducer as cart_reducer} from "./cart/reducer"

let combine_reducer=combineReducers({coler_reducer,product_reducer,material_reducer,cart_reducer})

export let store=legacy_createStore(combine_reducer,applyMiddleware(thunk))