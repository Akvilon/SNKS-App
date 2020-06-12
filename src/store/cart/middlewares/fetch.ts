import { MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { ApiService } from "../../../services/ApiService";
import * as CONST from '../../../constants';
import { setCartList, setTotalPrice } from "..";
import { Product } from "../../../models/Product";
import { getLocalStorage, setLocalStorage, removeLocalStorage } from "../../../utils/storage";


const CART_LIST = 'CART_LIST';

const totalSum = async (arr: Array<Product> | undefined) => {
    return arr ? await arr.reduce((acc, item) => {
        return acc + +item.retailPrice
    }, 0) : 0
}

export const fetchMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {

    if (action.type === ACTION_TYPES.GET_CART_LIST) {
        const list = JSON.parse(String(getLocalStorage(CART_LIST)))
        if (list && list.length > 0) {
            dispatch(setCartList(list))
            totalSum(list).then(sum => dispatch(setTotalPrice(sum)))
        } else {
            dispatch(setCartList(undefined))
        }
    } else if (action.type === ACTION_TYPES.ADD_CART_ITEM) {
        const list = JSON.parse(String(getLocalStorage(CART_LIST)))

        if (list && list.length > 0) {

            const duplicate = list.find((item: Product) => JSON.stringify(item) === JSON.stringify(action.payload));

            if (duplicate) {
                alert('You already have this sneaker in a cart')
                dispatch(setCartList(list))
                setLocalStorage(CART_LIST, JSON.stringify(list));
                return
            } else {
                const newCartList = [...list, action.payload];
                dispatch(setCartList(newCartList))
                setLocalStorage(CART_LIST, JSON.stringify(newCartList));
            }
        } else {
            dispatch(setCartList([action.payload]))
            setLocalStorage(CART_LIST, JSON.stringify([action.payload]));
        }

    } else if (action.type === ACTION_TYPES.DELETE_CART_ITEM) {
        const list = JSON.parse(String(getLocalStorage(CART_LIST)))
        const index = list.findIndex((el: Product) => el.id === action.payload);
        const newCartList = [
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ];
        dispatch(setCartList(newCartList));
        totalSum(newCartList).then(sum => dispatch(setTotalPrice(sum)));
        setLocalStorage(CART_LIST, JSON.stringify(newCartList));
    } else if (action.type === ACTION_TYPES.CLEAN_CART_LIST) {
        removeLocalStorage(CART_LIST);
        dispatch(setCartList(undefined))
    }

    next(action);
}