import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './store';
import { createBrowserHistory } from 'history';
import {ThemeProvider} from 'react-jss';
import { lightTheme } from './styles';


export const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>

    , document.getElementById('root'));

