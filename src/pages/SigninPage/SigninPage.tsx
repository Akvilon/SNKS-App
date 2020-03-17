import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';
import { SignInContainer } from '../../components/SignIn';

export const SigninPage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | SIGN IN'} withHeader={true}>
            <SignInContainer/>
        </Page>
    )
}