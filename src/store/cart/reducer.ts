import { Action } from "../types";
import { ACTION_TYPES } from "./actionTypes";
import { Product } from "../../models/Product";


const INITIAL_STATE = {
    cartList: undefined as Array<Product> | undefined,
}

export type CartState = typeof INITIAL_STATE;

export default (state: CartState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CART_LIST:
            return {...state.cartList, cartList: action.payload }
        default:
            return state
    }
}