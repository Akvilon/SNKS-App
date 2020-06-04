import axios from 'axios';
import * as CONST from '../constants';
import { FormValues } from '../models/FormValues';
import { User } from '../models/User';
import { SneackerListModel } from '../models/SneakerListModel';
import { Product } from '../models/Product';


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
            const response = await axios.get<Array<User>>(`${CONST.default.jsonServerUrl}/users?isSignedIn=true`);
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

    public static getSneakersByGender = async (gender: string, page: number) => {
        try {
            const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&gender=${gender}&page=${page}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static getSneakersByBrand = async (gender: string, brand: string, page: number) => {
        try {
            const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&brand=${brand}&gender=${gender}&page=${page}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static getSneakersBySize = async (gender: string, brand: string, size: number, page: number) => {
        try {
            const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&brand=${brand}&gender=${gender}&page=${page}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static getSneakersList = async (gender: string, brand: string, page: number, size?: number, sortType?: string) => {

        try {
            if (brand.toLowerCase() === 'all' && size) {
                const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&gender=${gender}&shoeSize=${size}&page=${page}`);
                return await response.data;
            } else if (brand.toLowerCase() === 'all' && sortType) {
                let response;
                switch (sortType) {
                    case 'default':
                        response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&brand=${brand}&gender=${gender}&page=${page}`);
                        return await response.data;
                    case 'most-active':
                        response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&gender=${gender}&page=${page}&sort=${sortType}`);
                        return response.data;
                    case 'lowest_ask':
                        response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&gender=${gender}&sort=${sortType}&order=ASC&page=${page}`);
                        return response.data;
                    case 'highest_bid':
                        response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&gender=${gender}&sort=${sortType}&order=DESC&page=${page}`);
                        return response.data;
                    default:
                        response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&brand=${brand}&gender=${gender}&page=${page}`);
                        return await response.data;
                }
            } else if (brand.toLowerCase() === 'all') {
                const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&gender=${gender}&page=${page}`);
                return await response.data;
            } else if (brand !== 'all' && size) {
                const response = await axios.get<SneackerListModel>(`https://stockx.com/api/browse?_tags=${brand}&productCategory=sneakers&gender=${gender}&shoeSize=${size}&page=${page}`);
                return await response.data;
            } else {
                const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&brand=${brand}&gender=${gender}&page=${page}`);
                return await response.data;
            }
        }
        catch (e) {
            throw e;
        }
    }

    public static getSneakerById = async (id: string) => {
        try {
            const response = await axios.get<any>(`${CONST.default.productUrl}/${id}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static sortSneackers = async (sortType: string, gender?: string, brand?: string) => {
        try {
            const response = await axios.get<SneackerListModel>(`${CONST.default.baseStockXUrl}&sort=${sortType}`);
            return response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static getCartList = async () => {
        try {
            const response = await axios.get<Array<Product>>(`${CONST.default.jsonServerUrl}/cartList`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static addCartItem = async (product: Product) => {
        try {
            const requestOptions = {
                id: product.id,
                brand: product.brand,
                colorway: product.colorway,
                gender: product.gender,
                retailPrice: product.retailPrice,
                title: product.title,
                year: product.year,
                media: {
                    imageUrl: product.media.imageUrl,
                    smallImageUrl: product.media.smallImageUrl,
                }
            }
            const response = await axios.post<Product>(`${CONST.default.jsonServerUrl}/cartList`, requestOptions);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }

    public static deleteCartItem = async (id: string) => {
        try {
            const response = await axios.delete<Product>(`${CONST.default.jsonServerUrl}/cartList/${id}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }
}