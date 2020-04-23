import * as React from 'react';
import { User } from '../../models/User';
import { AppState } from '../../store';
import { getActiveUserSelector } from '../../store/auth';
import { connect } from 'react-redux';


type StateProps = {
    activeUser: Array<User>
}

const UserInfo: React.FC<StateProps> = ({activeUser}) => {
    console.log('activeUser INFO',activeUser);
    return (
        <div>
            <p>{activeUser.length !== 0 ? activeUser[0].name : null}</p>
            <p>{activeUser.length !== 0 ? activeUser[0].email : null}</p>
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