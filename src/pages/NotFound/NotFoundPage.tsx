import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';


export const NotFoundPage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | 404'} {...props}>
            <h1>Hello from 404</h1>
        </Page>
    )
}