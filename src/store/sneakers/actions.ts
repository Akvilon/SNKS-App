import { ACTION_TYPES } from "./actionTypes";
import { SneackerListModel, Sneaker } from "../../models/SneakerListModel";


export const fetchSneakersList = () => ({
	type: ACTION_TYPES.FETCH_SNEAKERS_LIST,
});

export const setSneakersList = (sneakersList: SneackerListModel) => ({
	type: ACTION_TYPES.SET_SNEAKERS_LIST,
	payload: sneakersList
});

export const getSneakersByGender = (gender: string) => ({
	type: ACTION_TYPES.GET_SNEAKERS_BY_GENDER,
	payload: gender
});

export const setSneakersByGender = (list: SneackerListModel) => ({
	type: ACTION_TYPES.SET_SNEAKERS_BY_GENDER,
	payload: list
});

export const getSneakersByBrand = (gender: string, brand: string) => ({
	type: ACTION_TYPES.GET_SNEAKERS_BY_BRAND,
	payload: {gender, brand}
});

export const sortPopular = (sortType:string) => ({
	type: ACTION_TYPES.SORT_POPULAR,
	payload: sortType
});

export const setMostPopular = (mostPopularList: Array<Sneaker>) => ({
	type: ACTION_TYPES.SET_MOST_POPULAR,
	payload: mostPopularList
});