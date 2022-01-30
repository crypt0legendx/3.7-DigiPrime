import 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {  Router,Route } from 'react-router-dom';
import history from './app/utils/history';
import App from './app/App';
import AuthContext from './app/context/AuthContext';
import { AppContextProvider } from './app/context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
// * Bootstraps the application.
ReactDOM.render(
  <AuthContext>
      <AppContextProvider>
        <Router  history={ history }>
          <App />
        </Router>
      </AppContextProvider>
  </AuthContext>,
  document.getElementById('app'),
);
