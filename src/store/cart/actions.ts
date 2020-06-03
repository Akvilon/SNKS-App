import { ACTION_TYPES } from "./actionTypes";
import { Product } from "../../models/Product";


export const getCartList = () => ({
	type: ACTION_TYPES.GET_CART_LIST
})

export const setCartList = (list: Array<Product>) => ({
	type: ACTION_TYPES.SET_CART_LIST,
	payload: list
})

export const addCartItem = (item: Product) => {
	return {
		type: ACTION_TYPES.ADD_CART_ITEM,
		payload: item
	}
	
}
