import { MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { ApiService } from "../../../services/ApiService";
import * as CONST from '../../../constants';
import { setCartList } from "..";


export const fetchMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {

    if (action.type === ACTION_TYPES.GET_CART_LIST) {
        await ApiService.getCartList().then(res => dispatch(setCartList(res)))

    } else if (action.type === ACTION_TYPES.ADD_CART_ITEM) {
        await ApiService.addCartItem(action.payload)
    }

    next(action);
}