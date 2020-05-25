import * as React from 'react';
import { ApiService } from '../../services/ApiService';
import { Sneakers } from './Sneakers';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { setSneakersList, getSneakersListSelector, fetchSneakersList } from '../../store/sneakers';
import { SneackerListModel } from '../../models/SneakerListModel';


type SneakersProps = {
    gender: string;
}

type StateProps = {
    sneakersList: SneackerListModel | undefined
}

type DispatchProps = {
    fetchSneakersList: (gender: string, brand: string, page: number, size?: number, sortType?: string) => void,
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        sneakersList: getSneakersListSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        fetchSneakersList: (gender: string, brand: string, page: number, size?: number, sortType?: string) => dispatch(fetchSneakersList(gender, brand, page, size, sortType)),
    }
}

const connectedSneakers = connect<StateProps, DispatchProps, SneakersProps, AppState>(mapStateToProps, mapDispatchToProps)(Sneakers)

export {connectedSneakers as Sneakers}