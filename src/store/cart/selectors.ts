import { AppState } from "..";

export const getCartListSelector = (state: AppState) => state.cart.cartList;
export const getTotalPriceSelector = (state: AppState) => state.cart.totalPrice;
