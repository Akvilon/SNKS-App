import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';
import { Home } from '../../components/Home';


export const HomePage = (props: RouteComponentProps) => {
    return (
        <Page title={'SNKS | HOME'} withHeader={true} withFooter={true} {...props}>
           <Home {...props}/>
        </Page>
    )
}