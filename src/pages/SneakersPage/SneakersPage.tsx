import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';
import { PATHES } from '../../constants';
import { SneakersListContainer } from '../../components/SneakersList/SneakersList.container';


export const SneakersPage = (props: RouteComponentProps) => {
    let title = 'SNKS | ';
    let gender;
    if(props.location.pathname === PATHES.SNEAKERS_MEN) {
        title += 'MEN';
        gender = 'men';
    } else {
        title += 'WOMEN'
        gender = 'woman';
    }
    return (
        <Page title={title} withHeader={true}>
            <SneakersListContainer gender={gender} />
        </Page>
    )
}