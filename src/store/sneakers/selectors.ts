import { AppState } from "..";

export const getSneakersList = (state: AppState) => state.sneakers.sneakersList;
export const getSneakersByGenderSelector = (state: AppState) => state.sneakers.sneakersByGender;
export const getMostPopularSelector = (state: AppState) => state.sneakers.mostPopular;