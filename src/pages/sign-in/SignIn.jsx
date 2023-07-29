import React from 'react';

import Box from '@mui/material/Box';

import CustomButton from 'components/common/buttons/CustomButton';
import useAuth from 'context/AuthContext';

const SignIn = () => {
  const { setAuth } = useAuth();
  const handleAuth = () => {
    setAuth('abcdefghijklmnopqrstuvwxyz');
  };

  return (
    <>
      <Box p={3}>
        <CustomButton variant={'contained'} fullWidth onClick={handleAuth}>
          Login
        </CustomButton>
      </Box>
    </>
  );
};

export default SignIn;
