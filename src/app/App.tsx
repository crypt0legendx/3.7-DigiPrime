import './App.scss';

import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Router } from 'react-router-dom';
import history from './history';
import Pages from 'pages/routes';
const App = () => {
  return (
     <>
       <Router history={history}>
         <Route component={Pages}/>
       </Router>
     </>
  );
};

export default hot(App);
