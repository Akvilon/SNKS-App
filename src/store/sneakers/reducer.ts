import { Action } from "../types";
import { ACTION_TYPES } from "./actionTypes";
import { Sneaker, SneackerListModel } from "../../models/SneakerListModel";


const INITIAL_STATE = {
    sneakersList: undefined as SneackerListModel | undefined,
    mostPopular: undefined as Array<Sneaker> | undefined
}

export type SneakersState = typeof INITIAL_STATE;

export default (state: SneakersState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_SNEAKERS_LIST:
            return Object.assign({}, state, {sneakersList: action.payload})
        case ACTION_TYPES.SET_MOST_POPULAR:
            return { ...state, mostPopular: action.payload }
        default:
            return state
    }
}