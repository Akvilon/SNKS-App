import { ACTION_TYPES } from "./actionTypes";
import { SneackerListModel, SneakerListItem } from "../../models/SneakerListModel";
import { Sneaker } from "../../models/Sneaker";

export const fetchSneakersList = (gender: string, brand: string, page: number, size?: number, sortType?: string) => ({
	type: ACTION_TYPES.FETCH_SNEAKERS_LIST,
	payload: {gender, brand, page, size, sortType}
})

export const setSneakersList = (sneakersList: SneackerListModel) => ({
	type: ACTION_TYPES.SET_SNEAKERS_LIST,
	payload: sneakersList
});

export const getSneaker = (id: string) => ({
	type: ACTION_TYPES.GET_SNEAKER,
	payload: id
});

export const setSneaker = (sneaker: Sneaker | undefined) => ({
	type: ACTION_TYPES.SET_SNEAKER,
	payload: sneaker
});

export const sortPopular = (sortType: string) => ({
	type: ACTION_TYPES.SORT_POPULAR,
	payload: sortType
});

export const setMostPopular = (mostPopularList: Array<SneakerListItem>) => ({
	type: ACTION_TYPES.SET_MOST_POPULAR,
	payload: mostPopularList
});