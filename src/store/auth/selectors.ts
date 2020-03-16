import { AppState } from "..";

export const getIsSignedIn = (state: AppState) => state.auth.isSignedIn;