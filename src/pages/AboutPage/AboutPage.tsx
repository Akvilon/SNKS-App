import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';


export const AboutPage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | ABOUT'} withHeader={true}> 
            <h1>Hello from ABOUT</h1>
        </Page>
    )
}