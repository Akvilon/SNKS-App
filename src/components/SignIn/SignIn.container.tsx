import * as React from 'react';
import { SignIn } from './SignIn';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';

type DispatchProps = {
    setUser: () => void,
    setIsSignedIn: () => void
}

const SignInContainer = () => {
    return (
        <SignIn />
    )
}

// const mapDispatchToProps = (dispath: Dispatch<Action<any>>): DispatchProps => {
//     return {
//         setUser: () => dispath();
//         setIsSignedIn: () => dispath()
//     }
// }

// const ConnectedSignInContainer = connect(mapDispatchToProps)(SignInContainer)

export {SignInContainer}