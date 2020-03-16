import { Action } from "../types";
import { ACTION_TYPES } from "./actionTypes";
import { Sneaker } from "../../models/Sneaker";


export type AuthState = {
    isSignedIn: boolean
}

const INITIAL_STATE = {
    isSignedIn: false
}

export default (state: AuthState = INITIAL_STATE, action: Action<boolean>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_IS_SIGNED_IN:
            return { ...state, isSignedIn: action.payload }
        default:
            return state
    }
}