import * as React from "react";
import { RouteProps, Route, Redirect, RouteComponentProps } from "react-router";
import * as CONST from '../../constants';
import { User } from "../../models/User";
import { AppState } from "../../store";
import { getActiveUserSelector, getActiveUser } from "../../store/auth";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useEffect } from "react";


type ProtectedRouteProps = {
  activeUser: Array<User>
}

const ProtectedRoute: React.FC<ProtectedRouteProps & RouteProps> = ({activeUser, ...props }) => {
  console.log('hello from Protected')
  console.log('activeUser Pro', activeUser)
  
  return activeUser.length !== 0 ? <Route {...props} /> : <Redirect to={CONST.PATHES.SIGNIN} />
}


export { ProtectedRoute }