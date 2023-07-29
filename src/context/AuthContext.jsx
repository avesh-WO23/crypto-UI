import React, { createContext, useCallback, useContext, useState } from 'react';

import { PropTypes } from 'prop-types';
import {
  Navigate,
  useLocation,
  matchRoutes,
  useNavigate,
} from 'react-router-dom';

import { deleteAllCookies, getCookie, setCookie } from 'utils/commonFunctions';

import Layout from '../components/layout/Layout';

const AuthContext = createContext({
  authenticated: null,
  setAuth: function () {},
  removeAuth: function () {},
});

const token = getCookie('token');

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(token);
  const navigate = useNavigate();

  // set token when sign-in
  const addAuth = useCallback((token) => {
    setAuth(token);
    setCookie('token', token);
  }, []);

  // remove token
  const removeAuth = useCallback(() => {
    setAuth(null);
    deleteAllCookies();
    navigate('/sign-in');
  }, [navigate]);

  const value = {
    authenticated: auth,
    setAuth: addAuth,
    removeAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

// Paths that user can not access when already sign-in
const nonAuthRoute = ['/sign-in'];

export const AuthRedirect = () => {
  const { authenticated: auth } = useAuth();
  const location = useLocation();
  const authenticateRoute = !matchRoutes(
    nonAuthRoute.map((path) => ({ path })),
    location.pathname
  );

  if (!auth && authenticateRoute) {
    return <Navigate to={'/sign-in'} />;
  } else if (auth && !authenticateRoute) {
    return <Navigate to={'/'} />;
  }
  return <Layout />;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
