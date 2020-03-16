import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';


export const ContactsPage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | CONTACTS'} withHeader={true}>
            <h1>Hello from CONTACTS</h1>
        </Page>
    )
}