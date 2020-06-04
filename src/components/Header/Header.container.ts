import { Header } from "./Header";
import { connect } from "react-redux";
import { Product } from "../../models/Product";
import { getCartListSelector, getCartList } from "../../store/cart";
import { AppState } from "../../store";
import { Dispatch } from "redux";
import { Action } from "../../store/types";

type StateProps = {
    cartList: Array<Product> | undefined;
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

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export {ConnectedHeader as Header}