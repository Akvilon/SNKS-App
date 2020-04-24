import { MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { ApiService } from "../../../services/ApiService";
import { setSneakersList } from "..";
import { SneackerListModel } from "../../../models/SneakerListModel";
import * as CONST from '../../../constants';
import { shuffle } from "../../../utils/shuffle";

export const fetchMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {

    if (action.type === ACTION_TYPES.FETCH_SNEAKERS_LIST) {
        if (action.payload.brand === 'All') {
            await ApiService.getSneakersByGender(action.payload.gender).then(list => {
                console.log(list)
                const brands = CONST.default.brands;
                const filteredProducts = shuffle(list.Products
                    .filter(prod => brands.indexOf(prod.brand.toLowerCase()) !== -1 &&
                        prod.title.indexOf('Slide') < 0 &&
                        prod.category.indexOf('Other Brands') < 0 &&
                        (prod.retailPrice && prod.retailPrice !== 0)))
                const newList = {
                    Pagination: list.Pagination,
                    Products: filteredProducts
                }
                dispatch(setSneakersList(newList))
            })
        } else {
            await ApiService.getSneakersByBrand(action.payload.gender, action.payload.brand).then(list => {
                console.log(list)
                const filteredProducts = list.Products
                    .filter(prod => prod.title.indexOf('Slide') < 0 &&
                        prod.category.indexOf('Other Brands') < 0 &&
                        (prod.retailPrice && prod.retailPrice !== 0))
                const newList = {
                    Pagination: list.Pagination,
                    Products: filteredProducts
                }
                dispatch(setSneakersList(newList))
            })
        }
    }
    next(action);
}