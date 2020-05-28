import * as React from "react";
import { RouteProps, Route, Redirect, RouteComponentProps } from "react-router";
import * as CONST from '../../constants';
import { User } from "../../models/User";
import { AppState } from "../../store";
import { getActiveUserSelector, getActiveUser } from "../../store/auth";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useEffect, useState } from "react";
import { Spinner } from "../../utils/Spinner";


type ProtectedRouteProps = {
  activeUser: User | undefined
  getActiveUser: () => void
}

const ProtectedRoute: React.FC<ProtectedRouteProps & RouteProps> = ({ activeUser, getActiveUser, ...props }) => {

  const [resp, setResp] = useState(false)

  useEffect(() => {
    const getActive = async () => {
      await getActiveUser()
    }
    getActive().then(() => setResp(true))
    
  }, [])

  const renderProtected = () => {
    return activeUser ? <Route {...props} /> : <Redirect to={CONST.PATHES.SIGNIN} />
  }

  return resp ? renderProtected() : <Spinner />
}


export { ProtectedRoute }