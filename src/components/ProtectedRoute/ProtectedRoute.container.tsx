import * as React from "react";
import { RouteProps, Route, Redirect } from "react-router";
import * as CONST from '../../constants';
import { getLocalStorage } from "../../utils/storage";
import { User } from "../../models/User";
import { AppState } from "../../store";
import { getActiveUserSelector, getActiveUser } from "../../store/auth";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useEffect } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { Action } from "../../store/types";


type StateProps = {
    activeUser: User | undefined
}

type DispatchProps = {
    getActiveUser: () => void,
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        activeUser: getActiveUserSelector(state),
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>):DispatchProps => {
    return {
        getActiveUser: () => dispatch(getActiveUser()),
    }
}

const ConnectedProtectedRoute = connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);

export { ConnectedProtectedRoute as ProtectedRoute }