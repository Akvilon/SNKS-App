import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';


export const CartPage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | CART'} withHeader={true}>
            <h1>Hello from CART</h1>
        </Page>
    )
}