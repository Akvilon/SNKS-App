import axios from 'axios';
import * as CONST from '../constants';
import { FormValues } from '../models/FormValues';
import { User } from '../models/User';
import { SneackerListModel } from '../models/SneakerListModel';


export class ApiService {

    public static getUserList = async () => {
        try {
            const response = await axios.get<Array<User>>(`${CONST.default.jsonServerUrl}/users`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static getUserByEmail = async (email: string) => {
        try {
            const response = await axios.get<User>(`${CONST.default.jsonServerUrl}/users?email=${email}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static toggleActiveUser = async (user: User) => {
        console.log('user from toggle',user)
        try {
            const options = {
                isSignedIn: !user.isSignedIn
            }
            const response = await axios.patch<User>(`${CONST.default.jsonServerUrl}/users/${user.id}`, options);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static getActiveUser = async () => {
        try {
            const response = await axios.get(`${CONST.default.jsonServerUrl}/users?isSignedIn=true`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static addUser = async (values: FormValues) => {
        try {
            const requestOptions = {
                name: values.name,
                email: values.email,
                password: values.password,
                isSignedIn: true
            }
            const response = await axios.post<User>(`${CONST.default.jsonServerUrl}/users`, requestOptions);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static getSneakersByGender = async (gender: string) => {
        try {
            const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&gender=${gender}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static getSneakersByBrand = async (gender: string, brand: string) => {
        try {
            const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&brand=${brand}&gender=${gender}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static sortSneackers = async (sortType: string) => {
        try {
            const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&sort=${sortType}`);
            return response.data;
        }
        catch (e) {
            throw e;
        }
    }
}