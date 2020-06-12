import { Cart } from "./Cart";
import { connect } from "react-redux";
import { getCartListSelector, getCartList, deleteCartItem, getTotalPriceSelector, cleanCartList } from "../../store/cart";
import { AppState } from "../../store";
import { Dispatch } from "redux";
import { Action } from "../../store/types";
import { Product } from "../../models/Product";

type StateProps = {
    cartList: Array<Product> | undefined,
    totalPrice: number
}

type DispatchProps = {
    getCartList: () => void,
    cleanCartList: () => void,
    deleteCartItem: (id: string) => void,
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        cartList: getCartListSelector(state),
        totalPrice: getTotalPriceSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        getCartList: () => dispatch(getCartList()),
        deleteCartItem: (id: string) => dispatch(deleteCartItem(id)),
        cleanCartList: () => dispatch(cleanCartList())
    }
}


const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export {ConnectedCart as Cart}