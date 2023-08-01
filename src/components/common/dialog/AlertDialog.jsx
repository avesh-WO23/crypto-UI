import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PropTypes } from 'prop-types';

import CustomButton from '../buttons/CustomButton';

export default function AlertDialog(props) {
  const {
    open,
    title,
    description,
    cancelBtnText,
    submitBtnText,
    handleClose,
    handleSubmit,
    isLoading = false,
    disabled = false,
    sx,
  } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={sx}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {typeof description === 'string' ? (
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: (theme) => theme.palette.primary.dark }}
          >
            {description}
          </DialogContentText>
        ) : (
          description
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <CustomButton
          onClick={handleClose}
          sx={{
            borderRadius: 2,
          }}
          fullWidth
        >
          {cancelBtnText || 'Disagree'}
        </CustomButton>
        <CustomButton
          variant="contained"
          sx={{
            borderRadius: 2,
          }}
          onClick={handleSubmit}
          fullWidth
          isLoading={isLoading}
          disabled={disabled}
        >
          {submitBtnText || 'Agree'}
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
}

AlertDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  description: PropTypes.any,
  cancelBtnText: PropTypes.string,
  submitBtnText: PropTypes.string,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  sx: PropTypes.object,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};
