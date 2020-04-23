import * as React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { FormValues } from '../../models/FormValues';
import { Register } from './Register';
import { addUser } from '../../store/auth';


type OwnProps = {
    onSetToggleForm: (key: boolean) => void
}

type DispatchProps = {
    addUser: (values: FormValues) => void,
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        addUser: (values: FormValues) => dispatch(addUser(values))
    }
}

const ConnectedRegister = connect(null, mapDispatchToProps)(Register);

export { ConnectedRegister as Register }