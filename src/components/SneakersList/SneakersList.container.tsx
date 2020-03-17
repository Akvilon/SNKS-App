import * as React from 'react';
import {SneakersList} from './SneakersList';
import { ApiService } from '../../services/ApiService';

type SneakersProps = {
    gender: string;
}

class SneakersListContainer extends React.PureComponent<SneakersProps> {
    
    componentDidMount() {
        // const {gender} = this.props;
        // ApiService.getSneakersByGender(gender).then(res => console.log(res))

        // ApiService.getBrand(gender, 'Puma').then(res => console.log(res));
    }

    render() {
        return (
            <SneakersList />
        )
    }
}


export {SneakersListContainer}