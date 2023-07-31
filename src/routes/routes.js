import React, { lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import useAuth, { AuthProvider, AuthRedirect } from 'context/AuthContext';

const SignIn = lazy(() => import('pages/sign-in/SignIn'));
const Results = lazy(() => import('pages/Results'));
const Wallet = lazy(() => import('pages/Wallet'));

const Routes = () => {
  const { authenticated } = useAuth();
  const defaultNavigate = <Navigate to={authenticated ? '/' : '/sign-in'} />;
  const element = useRoutes([
    {
      element: <AuthRedirect />,
      children: [
        {
          index: true,
          element: <Wallet />,
        },
        {
          path: '/results',
          element: <Results />,
        },
        {
          path: '/sign-in',
          element: <SignIn />,
        },
        {
          path: '*',
          element: defaultNavigate,
        },
      ],
    },
  ]);

  return <AuthProvider>{element}</AuthProvider>;
};

export default Routes;
