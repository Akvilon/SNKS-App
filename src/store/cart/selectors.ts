import { AppState } from "..";

export const getCartListSelector = (state: AppState) => state.cart.cartList;
