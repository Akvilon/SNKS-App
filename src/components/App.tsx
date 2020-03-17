import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes, { AppRoute } from './App.routes';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from 'react-jss';
import useStyles from './App.styles';
import { ProtectedRoute } from './ProtectedRoute';

const App = () => {
  const theme = useTheme()
  const classes = useStyles({theme})
  return (
    <>
      <Switch>
        {
          routes.map((route: AppRoute) => route.isProtected ? <ProtectedRoute key={uuidv4()} {...route}/> : <Route key={uuidv4()} {...route}/>)
        }
      </Switch>
    </>
  );
}

export default App;
