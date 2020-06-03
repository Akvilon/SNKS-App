import { Cart } from "./Cart";
import { connect } from "react-redux";
import { getCartListSelector, getCartList } from "../../store/cart";
import { AppState } from "../../store";
import { Dispatch } from "redux";
import { Action } from "../../store/types";
import { Product } from "../../models/Product";

type StateProps = {
    cartList: Array<Product> | undefined
}

type DispatchProps = {
    getCartList: () => void
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        cartList: getCartListSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        getCartList: () => dispatch(getCartList())
    }
}


const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export {ConnectedCart as Cart}