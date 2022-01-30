import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const AuthenticatedLayout = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('digiObject');
  return (
        <Route
            {...rest}
            render={() => isAuthenticated ? (<Component/>) : (<Redirect to={'/login'} />)}
        />
  );
};