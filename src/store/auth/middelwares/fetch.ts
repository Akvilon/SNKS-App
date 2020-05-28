import { MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { ApiService } from "../../../services/ApiService";
import { verifySignInValidation, setActiveUser } from "..";
import { push } from "connected-react-router";
import { User } from "../../../models/User";

const fetchMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {
    if (action.type === ACTION_TYPES.GET_USER_BY_EMAIL) {
        const values = action.payload;
        await ApiService.getUserByEmail(values.email).then(user => dispatch(verifySignInValidation(user, values)))
    }
    else if (action.type === ACTION_TYPES.ADD_USER) {
        await ApiService.addUser(action.payload).then(() => dispatch(push('/profile')))
    }
    else if (action.type === ACTION_TYPES.GET_ACTIVE_USER) {
        await ApiService.getActiveUser().then(activeUser => {
            dispatch(setActiveUser(activeUser[0]))
        })
    }
    else if (action.type === ACTION_TYPES.LOG_OUT) {
        const user = action.payload
        await ApiService.toggleActiveUser(user)
            .then(() => {
                dispatch(setActiveUser(undefined));
                dispatch(push('/profile'))
            })
    }

    next(action);
}

export const fetchMiddlewares = [fetchMiddleware];