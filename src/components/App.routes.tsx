import * as React from 'react';
import * as CONST from '../constants';
import { RouteComponentProps, Redirect } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { CartPage } from '../pages/CartPage';
import { SneakersPage } from '../pages/SneakersPage';
import { ProfilePage } from '../pages/ProfilePage';
import { SigninPage } from '../pages/SigninPage';
import { NotFoundPage } from '../pages/NotFound';
import { ContactsPage } from '../pages/ContactsPage';



export type AppRoute = {
    path: CONST.PATHES,
    render: (props: RouteComponentProps) => any,
    exact?: boolean,
    isProtected?: boolean
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
        path: CONST.PATHES.SNEAKERS_MEN,
        render: (props: RouteComponentProps) => <SneakersPage {...props}/>,
    },
    {
        path: CONST.PATHES.SNEAKERS_WOMEN,
        render: (props: RouteComponentProps) => <SneakersPage {...props}/>,
    },
    {
        path: CONST.PATHES.CONTACTS,
        render: (props: RouteComponentProps) => <ContactsPage {...props}/>,
    },
    {
        path: CONST.PATHES.CART,
        render: (props: RouteComponentProps) => <CartPage {...props}/>,
    },
    {
        path: CONST.PATHES.PROFILE,
        render: (props: RouteComponentProps) => <ProfilePage {...props}/>,
        isProtected: true
    },
    {
        path: CONST.PATHES.SIGNIN,
        render: (props: RouteComponentProps) => <SigninPage {...props}/>,
    },
    {
        path: CONST.PATHES.NOT_FOUND,
        render: (props: RouteComponentProps) => <NotFoundPage {...props}/>,
    },
    {
        path: CONST.PATHES.REDIRECT,
        render: () => <Redirect to={'/404'}/>,
    },
]