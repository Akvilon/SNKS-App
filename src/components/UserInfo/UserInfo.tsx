import * as React from 'react';
import { User } from '../../models/User';
import { AppState } from '../../store';
import { getActiveUserSelector } from '../../store/auth';
import { connect } from 'react-redux';


type StateProps = {
    activeUser: User | undefined
}

const UserInfo: React.FC<StateProps> = ({activeUser}) => {
    return (
        <div>
            <p>{activeUser ? activeUser.name : null}</p>
            <p>{activeUser ? activeUser.email : null}</p>
        </div>
    )
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        activeUser: getActiveUserSelector(state)
    }
}

const ConnectedUserInfo = connect(mapStateToProps)(UserInfo);

export {ConnectedUserInfo as UserInfo}