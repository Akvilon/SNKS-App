import { MiddlewareAPI, Middleware } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { ApiService } from "../../../services/ApiService";
import { setSneakersList, setSneaker } from "..";
import { SneakerListItem } from "../../../models/SneakerListModel";
import * as CONST from '../../../constants';
import { shuffle } from "../../../utils/shuffle";


// Some ruls to exclude different "no sneakers" items like slides, sandals ets. and items without photos or price

const filterOptions = (sneaker: SneakerListItem) => {
    return sneaker.title.indexOf('Slide') < 0 &&
        sneaker.title.indexOf('Sandal') < 0 &&
        (sneaker.category && sneaker.category.indexOf('Other Brands') < 0) &&
        (sneaker.retailPrice && sneaker.retailPrice !== 0)
}

export const fetchMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {

    if (action.type === ACTION_TYPES.FETCH_SNEAKERS_LIST) {
        await ApiService.getSneakersList(action.payload.gender, action.payload.brand, action.payload.page, action.payload.size, action.payload.sortType)
            .then(list => {
                if (list.Pagination.currentPage.includes('brand')) {
                    const filteredProducts = list.Products.filter(filterOptions);
                    dispatch(setSneakersList({ Pagination: list.Pagination, Products: filteredProducts }));
                } else {
                    const brands = CONST.default.brands;
                    const filteredProducts = list.Products
                        .filter(sneaker => brands.indexOf(sneaker.brand.toLowerCase()) !== -1) // Eliminate all unnessesary brands
                        .filter(filterOptions);
                    dispatch(setSneakersList({ Pagination: list.Pagination, Products: filteredProducts }));
                }
            })
    } else if (action.type === ACTION_TYPES.GET_SNEAKER) {
        await ApiService.getSneakerById(action.payload).then(sneaker => dispatch(setSneaker(sneaker)))
    }

    next(action);
}