import { ACTION_TYPES } from "./actionTypes";

export const setSneakersList = (isSignedIn:boolean) => ({
	type: ACTION_TYPES.SET_IS_SIGNED_IN,
	payload: isSignedIn
});