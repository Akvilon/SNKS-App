import * as React from 'react';
import * as CONST from '../constants';
import { RouteComponentProps } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { CartPage } from '../pages/CartPage';
import { SneakersPage } from '../pages/SneakersPage';



export type AppRoute = {
    path: CONST.PATHES,
    render: (props: RouteComponentProps) => any,
    exact?: boolean
}

export default [
    {
        path: CONST.PATHES.HOME,
        render: (props: RouteComponentProps) => <HomePage {...props}/>,
        exact: true
    },
    {
        path: CONST.PATHES.ABOUT,
        render: (props: RouteComponentProps) => <AboutPage {...props}/>,
    },
    {
        path: CONST.PATHES.CART,
        render: (props: RouteComponentProps) => <CartPage {...props}/>,
    },
    {
        path: CONST.PATHES.SNEAKERS_MEN,
        render: (props: RouteComponentProps) => <SneakersPage {...props}/>,
    },
    {
        path: CONST.PATHES.SNEAKERS_WOMEN,
        render: (props: RouteComponentProps) => <SneakersPage {...props}/>,
    },
]