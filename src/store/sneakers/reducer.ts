import { Action } from "../types";
import { ACTION_TYPES } from "./actionTypes";
import { Sneaker } from "../../models/Sneaker";



export type SneakersState = {
    sneakersList: Array<Sneaker>
}

const INITIAL_STATE = {
    sneakersList: []
}

export default (state: SneakersState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_SNEAKERS_LIST:
            return { ...state, sneakersList: action.payload }
        default:
            return state
    }
}