import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';


export const ProfilePage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | PROFILE'} withHeader={true}>
            <h1>Hello from PROFILE</h1>
        </Page>
    )
}