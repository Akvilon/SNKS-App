import * as React from 'react';
import { AppState } from "../../store";
import { Dispatch } from "redux";
import { Action } from "../../store/types";
import { connect } from "react-redux";
import { getSneakerSelector, getSneaker } from "../../store/sneakers";
import { SneakerCard } from './SneakerCard';
import { Sneaker } from '../../models/Sneaker';



type StateProps = {
    sneaker: Sneaker | undefined
}

type DispatchProps = {
    getSneaker: (id: string) => void,
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        sneaker: getSneakerSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        getSneaker: (id: string) => dispatch(getSneaker(id)),
    }
}

const ConnectedSneakerCard = connect(mapStateToProps, mapDispatchToProps)(SneakerCard)

export { ConnectedSneakerCard as SneakerCard }