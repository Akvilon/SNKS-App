import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';
import { Cart } from '../../components/Cart';


export const CartPage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | CART'} withHeader={true} withFooter={true} withInnerBlock={true} {...props}>
            <Cart />
        </Page>
    )
}