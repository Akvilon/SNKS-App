import { ACTION_TYPES } from "./actionTypes";
import { SneackerListModel, Sneaker } from "../../models/SneakerListModel";

export const fetchSneakersList = (gender: string, brand: string) => ({
	type: ACTION_TYPES.FETCH_SNEAKERS_LIST,
	payload: {gender, brand}
})

export const setSneakersList = (sneakersList: SneackerListModel) => ({
	type: ACTION_TYPES.SET_SNEAKERS_LIST,
	payload: sneakersList
});

export const sortPopular = (sortType:string) => ({
	type: ACTION_TYPES.SORT_POPULAR,
	payload: sortType
});

export const setMostPopular = (mostPopularList: Array<Sneaker>) => ({
	type: ACTION_TYPES.SET_MOST_POPULAR,
	payload: mostPopularList
});