import { AppState } from "..";

export const getSneakersListSelector = (state: AppState) => state.sneakers.sneakersList;
export const getSneakerSelector = (state: AppState) => state.sneakers.sneaker;
export const getMostPopularSelector = (state: AppState) => state.sneakers.mostPopular;