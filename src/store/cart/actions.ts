import { ACTION_TYPES } from "./actionTypes";
import { Product } from "../../models/Product";


export const getCartList = () => ({
	type: ACTION_TYPES.GET_CART_LIST
})

export const setCartList = (list: Array<Product> | undefined) => ({
	type: ACTION_TYPES.SET_CART_LIST,
	payload: list
})

export const cleanCartList = () => ({
	type: ACTION_TYPES.CLEAN_CART_LIST,
})

export const addCartItem = (item: Product) => ({
	type: ACTION_TYPES.ADD_CART_ITEM,
	payload: item
})

export const deleteCartItem = (id: string) => ({
	type: ACTION_TYPES.DELETE_CART_ITEM,
	payload: id
})

export const setTotalPrice = (price: number) => ({
	type: ACTION_TYPES.SET_TOTAL_PRICE,
	payload: price
})
