import { compose, combineReducers, createStore, applyMiddleware, Middleware } from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {History} from 'history';
import sneakers , { SneakersState, sneakersMiddlewares } from "./sneakers";
import auth, { AuthState, authMiddlewares } from "./auth";



// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export interface AppState {
    auth: AuthState,
	sneakers: SneakersState
}

const rootReducer = (history: History) => combineReducers(
    {
        auth,
	    sneakers,
        router: connectRouter(history)
    }
);

export default (history: History) => {
    return createStore(
        rootReducer(history),
			undefined,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                ...authMiddlewares as Middleware[],
                ...sneakersMiddlewares as Middleware[]
            )
        )
    );
}