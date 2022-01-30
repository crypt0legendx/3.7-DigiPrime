import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import {Regions} from 'pages/Regions';
import {FocusSector} from 'pages/AddFocusSector';
import {Landing} from 'pages/LandingPage';
import {GrafanaDashboaard} from 'pages/GrafanaDashboard';
import { Login } from 'pages/Login';

// Layouts
import UnauthenticatedLayout from '../Layouts/UnAuthenticatedLayout';
import {AuthenticatedLayout} from '../Layouts/AuthenticatedLayout';

export const Pages = () => {
  return(
    <Switch>
      <UnauthenticatedLayout path="/login" exact={true} component={Login}/>
      <AuthenticatedLayout path="/regions" exact={true} component={Regions}/>
      <AuthenticatedLayout path="/" exact={true} component={Landing}/>
      <AuthenticatedLayout path="/sector" exact={true} component={FocusSector}/>
      <AuthenticatedLayout path="/dashboard" exact={true} component={GrafanaDashboaard}/>
    </Switch>
  );
};

export default Pages;
