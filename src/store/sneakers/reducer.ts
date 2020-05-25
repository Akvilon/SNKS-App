import { Action } from "../types";
import { ACTION_TYPES } from "./actionTypes";
import { SneackerListModel, SneakerListItem } from "../../models/SneakerListModel";
import { Sneaker } from "../../models/Sneaker";


const INITIAL_STATE = {
    sneakersList: undefined as SneackerListModel | undefined,
    sneaker: undefined as Sneaker | undefined,
    mostPopular: undefined as Array<SneakerListItem> | undefined
}

export type SneakersState = typeof INITIAL_STATE;

export default (state: SneakersState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_SNEAKERS_LIST:
            return Object.assign({}, state, { sneakersList: action.payload })
        case ACTION_TYPES.SET_SNEAKER:
            return Object.assign({}, state, { sneaker: action.payload })
        case ACTION_TYPES.SET_MOST_POPULAR:
            return { ...state, mostPopular: action.payload }
        default:
            return state
    }
}