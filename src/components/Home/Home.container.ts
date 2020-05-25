import * as React from 'react';
import { connect } from 'react-redux';
import { Home } from './Home';
import { User } from '../../models/User';
import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { getActiveUser } from '../../store/auth';
import { getMostPopularSelector, sortPopular } from '../../store/sneakers';
import { SneakerListItem } from '../../models/SneakerListModel';


type StateProps = {
    mostPopular: Array<SneakerListItem> | undefined
}

type DispatchProps = {
    getActiveUser: () => void,
    getMostPopular: (sortType:string) => void
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        mostPopular: getMostPopularSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        getActiveUser: () => dispatch(getActiveUser()),
        getMostPopular: (sortType:string) => dispatch(sortPopular(sortType))
    }
}

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export {ConnectedHome as Home}