import * as React from 'react';
import {Redirect, Route} from 'react-router-dom';

/**
 * Private Route component, modified from Route
 */
const PrivateRoute = ({component: Component, isAuthenticated, redirectPath, ...rest}) => (
  <Route
    {...rest}
    render={
      props => (
        isAuthenticated ?
          // * If user is authenticated, render the page
          <Component {...props} /> :
          // * If user is not authenticated, redirect to login
          <Redirect to={{pathname: redirectPath, state: {from: props.location}}}/>
      )
    }
  />
);

/**
 * Recursively render routes
 */
export const renderRoutes = (
  routes: RouteConfig[],
  opts: { deep: boolean, authenticated: boolean },
) =>
  routes.map((route) => {
    // * Recursively render nested child routes if 'deep=true'
    if (opts.deep && route.routes) {
      return [renderRoutes([route], opts)].concat(renderRoutes(route.routes, opts));
    }

    let routeComponent;

    if (route.isFourOFour) {
      routeComponent = (
        <Redirect key={route.slug} to={{pathname: '/dashboard'}}/>
      );
    } else {
      if (route.component) {
        // * If route is public, render Route component
        if (route.isPublic) {
          routeComponent = (
            <Route
              key={route.slug}
              exact={route.isExact}
              path={route.path}
              component={route.component}
            />
          );
          // * Otherwise, render PrivateRoute component
        } else {
          routeComponent = (
            <PrivateRoute
              key={route.slug}
              exact={route.isExact}
              path={route.path}
              component={route.component}
              isAuthenticated={opts.authenticated}
              redirectPath={'/login'}
            />
          );
        }
      }
    }

    return routeComponent;
  });
