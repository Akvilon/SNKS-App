import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';


export const HomePage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | HOME'}>
            <h1>Hello from HOME</h1>
        </Page>
    )
}