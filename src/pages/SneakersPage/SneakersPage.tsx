import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';
import { PATHES } from '../../constants';


export const SneakersPage = (props: RouteComponentProps) => {
    let title = 'SNKS | ';
    if(props.location.pathname === PATHES.SNEAKERS_MEN) {
        title += 'MEN'
    } else {
        title += 'WOMEN'
    }
    return (
        <Page title={title}>
            <h1>Hello from SNEAKERS</h1>
        </Page>
    )
}