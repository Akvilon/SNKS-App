import axios from 'axios';
import * as CONST from '../constants';

export class ApiService {
    public static getSneakersByGender = async (gender: string) => {
        try {
            const response = await axios.get(`${CONST.default.baseUrl}&gender=${gender}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }
    public static getBrand = async (gender: string, brand: string) => {
        try {
            const response = await axios.get(`${CONST.default.baseUrl}&brand=${brand}&gender=${gender}`);
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }
}