import { AppState } from "..";

export const getSneakersListSelector = (state: AppState) => state.sneakers.sneakersList;
export const getMostPopularSelector = (state: AppState) => state.sneakers.mostPopular;