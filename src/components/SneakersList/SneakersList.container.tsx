import * as React from 'react';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { SneakersList } from './SneakersList';


type StateProps = {

}

const mapStateToProps = (state: AppState): StateProps => {
    return {

    }
}

const connectedSneakersList = connect(mapStateToProps)(SneakersList)

export {connectedSneakersList as SneakersList}