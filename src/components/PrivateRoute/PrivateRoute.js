import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import useDidMount from '../../hooks/useDidMount';


const PrivateRoute = ({ component: Component, ...rest }) => {
  useDidMount(() => {
    if (!rest.isAuthenticated && rest.path !== '/login') {
      rest.history.push('/login');
    }
  })

  return <Route {...rest} render={props => (
    rest.isAuthenticated
      ? <Component {...rest} {...props} />
      : null
  )} />
}


export default withRouter(PrivateRoute);