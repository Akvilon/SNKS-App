import { Middleware, MiddlewareAPI } from "redux";
import { Action } from "../../types";
import { ACTION_TYPES } from "../actionTypes";
import { ApiService } from "../../../services/ApiService";
import { setMostPopular } from "..";
import { Sneaker } from "../../../models/SneakerListModel";


export const sortMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {
    if (action.type === ACTION_TYPES.SORT_POPULAR) {
        ApiService.sortSneackers(action.payload).then(({ Products }) => {
            const popular: Array<Sneaker> = [];
            Products.forEach(product => {
                if (popular.length < 9) {
                    const rand = Math.floor(Math.random() * Products.length);
                    if (!popular.includes(Products[rand]) && Products[rand].title.indexOf('Slide') < 0) {
                        popular.push(Products[rand])
                    }
                }
            })
            dispatch(setMostPopular(popular))
        })
    }
    next(action);
}