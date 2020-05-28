import { Action } from "../types";
import { ACTION_TYPES } from "./actionTypes";
import { User } from "../../models/User";


const INITIAL_STATE = {
    userList: [] as Array<User>,
    signInValidationError: '',
    activeUser: undefined as User | undefined,
}

export type AuthState = typeof INITIAL_STATE;

export default (state: AuthState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_USER_LIST:
            return { ...state.userList, userList: action.payload }

        case ACTION_TYPES.SET_ACTIVE_USER:
            return Object.assign({}, state, { activeUser: action.payload })

        case ACTION_TYPES.SET_SIGNIN_VALIDATION_ERROR:
            return { ...state, signInValidationError: action.payload }
        default:
            return state
    }
}