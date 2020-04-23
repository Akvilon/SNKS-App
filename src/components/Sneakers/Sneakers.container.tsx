import * as React from 'react';
import { ApiService } from '../../services/ApiService';
import { Sneakers } from './Sneakers';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { setSneakersList, getSneakersByBrand, getSneakersList, getSneakersByGender, getSneakersByGenderSelector } from '../../store/sneakers';
import { SneackerListModel } from '../../models/SneakerListModel';


type SneakersProps = {
    gender: string;
}

type StateProps = {
    sneakersByGender: SneackerListModel | undefined
}

type DispatchProps = {
    getSneakersByGender: (gender: string) => void,
    getSneakersByBrand: (gender: string, brand: string) => void
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        sneakersByGender: getSneakersByGenderSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        getSneakersByGender: (gender: string) => dispatch(getSneakersByGender(gender)),
        getSneakersByBrand: (gender: string, brand: string) => dispatch(getSneakersByBrand(gender, brand))
    }
}

const connectedSneakers = connect<StateProps, DispatchProps, SneakersProps, AppState>(mapStateToProps, mapDispatchToProps)(Sneakers)

export {connectedSneakers as Sneakers}