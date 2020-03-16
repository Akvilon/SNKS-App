import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';

export const SigninPage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | SIGN IN'} withHeader={true}>
            <h1>Hello from SIGN IN</h1>
        </Page>
    )
}