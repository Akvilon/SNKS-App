import * as React from 'react';
import { User } from '../../models/User';
import { AppState } from '../../store';
import { getActiveUserSelector, logOut } from '../../store/auth';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';


type StateProps = {
    activeUser: User | undefined
}

type DispatchProps = {
    onLogOut: (activeUser: User | undefined) => void
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        activeUser: getActiveUserSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        onLogOut: (activeUser: User | undefined) => dispatch(logOut(activeUser))
    }
}

const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export {ConnectedProfile as Profile}