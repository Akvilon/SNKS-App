import * as React from 'react';
import { SignIn } from './SignIn';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { getSignInValidationErrorSelector, getUserByEmail } from '../../store/auth';
import { AppState } from '../../store';
import { FormValues } from '../../models/FormValues';

type StateProps = {
    signInValidationError: string
}

type DispatchProps = {
    getUserByEmail: (values: FormValues) => void
}


const mapStateToProps = (state: AppState): StateProps => {
    return {
        signInValidationError: getSignInValidationErrorSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        getUserByEmail: (values: FormValues) => dispatch(getUserByEmail(values)),
    }
}

const ConnectedSignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export { ConnectedSignIn as SignIn }