import { MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { ApiService } from "../../../services/ApiService";
import * as CONST from '../../../constants';
import { setCartList, setTotalPrice } from "..";
import { Product } from "../../../models/Product";


const totalSum = async (arr: Array<Product> | undefined) => {
    return arr ? await arr.reduce((acc, item) => {
        return acc + +item.retailPrice
    },0) : 0
}

export const fetchMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {

    if (action.type === ACTION_TYPES.GET_CART_LIST) {
        await ApiService.getCartList().then(res => {
            dispatch(setCartList(res))
            totalSum(res).then( sum => dispatch(setTotalPrice(sum)))
        })
    } else if (action.type === ACTION_TYPES.ADD_CART_ITEM) {
        await ApiService.addCartItem(action.payload).then(() => ApiService.getCartList().then(res => dispatch(setCartList(res))))
    } else if (action.type === ACTION_TYPES.DELETE_CART_ITEM) {
        await ApiService.deleteCartItem(action.payload).then(() => ApiService.getCartList().then(res => {
            dispatch(setCartList(res))
            totalSum(res).then( sum => dispatch(setTotalPrice(sum)))
        }))
    }

    next(action);
}