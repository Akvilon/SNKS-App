import { Store, MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { ApiService } from "../../../services/ApiService";
import { verifySignInValidation } from "..";
import { setLocalStorage } from "../../../utils/storage";
import { push } from "connected-react-router";
import * as CONST from '../../../constants';


export const fetchMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.GET_USER_BY_EMAIL) {
        const values = action.payload;
        ApiService.getUserByEmail(values.email).then(user => dispatch(verifySignInValidation(user, values)))
    } else if (action.type === ACTION_TYPES.ADD_USER) {
        ApiService.addUser(action.payload)
        setLocalStorage(CONST.default.IS_SIGNED_IN, 'true')
        dispatch(push('/profile'));
    }

    next(action);
}