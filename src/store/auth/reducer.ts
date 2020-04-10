import { Action } from "../types";
import { ACTION_TYPES } from "./actionTypes";
import { Sneaker } from "../../models/Sneaker";
import { User } from "../../models/User";


export type AuthState = {
    userList: Array<User>;
    signInValidationError: string,
    activeUser: Array<User>;
}

const INITIAL_STATE = {
    userList: [] as Array<User>,
    signInValidationError: '',
    activeUser: [],
}

export default (state: AuthState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_USER_LIST:
            return { ...state.userList, userList: action.payload }

        case ACTION_TYPES.SET_ACTIVE_USER:
            console.log('SET_USER > REDUCER', action.payload)
            return { ...state.activeUser, activeUser: action.payload }

        case ACTION_TYPES.SET_SIGNIN_VALIDATION_ERROR:
            return { ...state, signInValidationError: action.payload }
        default:
            return state
    }
}