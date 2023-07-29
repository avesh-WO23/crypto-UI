import React from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <React.Suspense
      fallback={
        <Box
          width="100%"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      }
    >
      <Outlet />
    </React.Suspense>
  );
};

export default Layout;
