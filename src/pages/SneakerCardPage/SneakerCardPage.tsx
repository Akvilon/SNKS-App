import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps, match } from 'react-router';
import { Profile } from '../../components/Profile';
import { SneakerCard } from '../../components/SneakerCard';
import { useParams } from 'react-router-dom';


export const SneakerCardPage = (props: RouteComponentProps) => {
   
    return (
        <Page title={'SNKS | PROFILE'} withHeader={true} withInnerBlock={true} withFooter={true} {...props}>
            <SneakerCard {...props} />
        </Page>
    )
}