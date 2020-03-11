import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes, { AppRoute } from './App.routes';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from 'react-jss';
import useStyles from './App.styles';

const App = () => {
  const theme = useTheme()
  const classes = useStyles({theme})
  return (
    <div className="App">
      <Switch>
        {
          routes.map((route: AppRoute) => <Route key={uuidv4()} {...route}/>)
        }
      </Switch>
    </div>
  );
}

export default App;
