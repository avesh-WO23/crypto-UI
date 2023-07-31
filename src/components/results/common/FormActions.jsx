import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { PropTypes } from 'prop-types';

import CustomButton from 'components/common/buttons/CustomButton';

const CustomButtonSx = {
  py: 1,
  borderRadius: 2,
};

const FormActions = ({ handleClear, handleSubmit, cancelText, submitText }) => {
  return (
    <Box position={'sticky'} bottom={0} bgcolor={'#fff'} zIndex={1}>
      <Divider />
      <Box display={'flex'} justifyContent={'center'} gap={1} p={2}>
        <CustomButton sx={CustomButtonSx} fullWidth onClick={handleClear}>
          {cancelText || 'Clear All'}
        </CustomButton>
        <CustomButton
          variant={'contained'}
          sx={CustomButtonSx}
          onClick={handleSubmit}
          fullWidth
        >
          {submitText || 'Apply'}
        </CustomButton>
      </Box>
    </Box>
  );
};

FormActions.propTypes = {
  handleClear: PropTypes.func,
  handleSubmit: PropTypes.func,
  cancelText: PropTypes.string,
  submitText: PropTypes.string,
};

export default FormActions;
