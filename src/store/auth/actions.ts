import { ACTION_TYPES } from "./actionTypes";
import { User } from "../../models/User";
import { FormValues } from "../../models/FormValues";

export const getUserList = () => ({
	type: ACTION_TYPES.GET_USER_LIST,
})

export const setUserList = (userList: Array<User>) => ({
	type: ACTION_TYPES.SET_USER_LIST,
	payload: userList
})

export const getUserByEmail = (values: FormValues) => ({
	type: ACTION_TYPES.GET_USER_BY_EMAIL,
	payload: values
})

export const setActiveUser = (activeUser: Array<User>) => ({
	type: ACTION_TYPES.SET_ACTIVE_USER,
	payload: activeUser
})

export const getActiveUser = () => ({
	type: ACTION_TYPES.GET_ACTIVE_USER,
})

export const addUser = (values: FormValues) => ({
	type: ACTION_TYPES.ADD_USER,
	payload: values
})

export const verifySignInValidation = (user: User, values: FormValues) => ({
	type: ACTION_TYPES.VERIFY_SIGNIN_VALIDATION,
	payload: { user, values }
})

export const setSignInValidationError = (text: string) => ({
	type: ACTION_TYPES.SET_SIGNIN_VALIDATION_ERROR,
	payload: text
})

export const logOut = (activeUser: Array<User>) => ({
	type: ACTION_TYPES.LOG_OUT,
	payload: activeUser
})