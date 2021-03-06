import * as React from 'react';
import { Page } from '../../utils/Page';
import { RouteComponentProps } from 'react-router';
import { PATHES } from '../../constants';
import { Sneakers } from '../../components/Sneakers/Sneakers.container';


export const SneakersPage: React.FC<RouteComponentProps> = (props) => {
    let title = 'SNKS | ';
    let gender;
    if(props.location.pathname === PATHES.SNEAKERS_MEN) {
        title += 'MEN';
        gender = 'men';
    } else {
        title += 'WOMEN'
        gender = 'women';
    }
    return (
        <Page title={title} withHeader={true} withFooter={true} {...props}>
            <Sneakers gender={gender} {...props}/>
        </Page>
    )
}