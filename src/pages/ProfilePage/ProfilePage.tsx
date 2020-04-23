import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';
import { Profile } from '../../components/Profile';



export const ProfilePage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | PROFILE'} withHeader={true} withInnerBlock={true} withFooter={true}>
            <Profile />
        </Page>
    )
}