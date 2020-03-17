import * as React from "react";
import { RouteProps, Route, Redirect } from "react-router";
import * as CONST from '../../constants';
import { connect } from "react-redux";
import { getIsSignedIn } from "../../store/auth";
import { AppState } from "../../store";


type StateProps = {
    isSignedIn: boolean;
}

const ProtectedRoute: React.FC<StateProps & RouteProps> = ({isSignedIn, ...props}) => {
    console.log('');
    console.log(isSignedIn);
  return isSignedIn ? <Route {...props}/> : <Redirect to={CONST.PATHES.SIGNIN} />
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        isSignedIn: getIsSignedIn(state)
    }
}

const ConnectedProtectedRoute = connect(mapStateToProps)(ProtectedRoute);


export {ConnectedProtectedRoute as ProtectedRoute}