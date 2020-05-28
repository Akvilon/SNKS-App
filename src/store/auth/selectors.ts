import { AppState } from "..";
import { User } from "../../models/User";

export const getUserListSelector = (state: AppState): Array<User> => state.auth.userList;
export const getActiveUserSelector = (state: AppState): User | undefined => state.auth.activeUser;
export const getSignInValidationErrorSelector = (state: AppState): string => state.auth.signInValidationError;