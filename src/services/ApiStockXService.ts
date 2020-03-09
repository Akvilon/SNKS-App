import axios from 'axios';

export class ApiStockXService {
    public static get = async (uri: string) => {
        try {
            const response = await axios.get('/');
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }
}