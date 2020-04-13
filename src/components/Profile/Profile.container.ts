import * as React from 'react';
import { User } from '../../models/User';
import { AppState } from '../../store';
import { getActiveUserSelector, logOut } from '../../store/auth';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { Dispatch } from 'redux';


type StateProps = {
    activeUser: Array<User>
}

type DispatchProps = {
    onLogOut: (activeUser: Array<User>) => void
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        activeUser: getActiveUserSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        onLogOut: (activeUser: Array<User>) => dispatch(logOut(activeUser))
    }
}

const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export {ConnectedProfile as Profile}