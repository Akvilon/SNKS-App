import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps, match } from 'react-router';
import { SneakerCard } from '../../components/SneakerCard';


export const SneakerCardPage = (props: RouteComponentProps) => {
   
    return (
        <Page title={'SNKS | PROFILE'} withHeader={true} withInnerBlock={true} withFooter={true} {...props}>
            <SneakerCard {...props} />
        </Page>
    )
}