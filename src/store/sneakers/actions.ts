import { ACTION_TYPES } from "./actionTypes";
import { Sneaker } from "../../models/Sneaker";


export const fetchSneakersList = () => ({
	type: ACTION_TYPES.FETCH_SNEAKERS_LIST,
});

export const setSneakersList = (sneakersList: Array<Sneaker>) => ({
	type: ACTION_TYPES.SET_SNEAKERS_LIST,
	payload: sneakersList
});