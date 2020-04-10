import { MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { setSignInValidationError, setActiveUser } from "..";
import { push } from "connected-react-router";
import { setLocalStorage } from "../../../utils/storage";
import * as CONST from '../../../constants';
import { User } from "../../../models/User";
import { ApiService } from "../../../services/ApiService";


export const signInValidationErrorsMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {
    if (action.type === ACTION_TYPES.VERIFY_SIGNIN_VALIDATION) {
        const user: User = action.payload.user[0];
        const values = action.payload.values;
        if (user) {
            if (user.email === values.email && user.password === values.password) {
                dispatch(setSignInValidationError(''))
                await ApiService.toggleActiveUser(user)
                .then(() => dispatch(push('/')));
            } else {
                dispatch(setSignInValidationError('Wrong password'))
            }
        } else {
            dispatch(setSignInValidationError('No such user, register, please'))
        }
    }
    next(action);
}