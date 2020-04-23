import { MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { ApiService } from "../../../services/ApiService";
import { setSneakersByGender } from "..";


export const fetchMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {
    if (action.type === ACTION_TYPES.FETCH_SNEAKERS_LIST) {

    } else if (action.type === ACTION_TYPES.GET_SNEAKERS_BY_GENDER) {
        await ApiService.getSneakersByGender(action.payload).then(res => dispatch(setSneakersByGender(res)))
    }
    next(action);
}