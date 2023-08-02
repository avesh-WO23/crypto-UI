import { useState } from 'react';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

const CustomTextField = styled(TextField)`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    display: none;
  }
`;

export default function HookTextField(props) {
  const { field, fieldState, formState } = useController(props);
  const { type, label, isNotRequired, secondaryLabel, sx, ...rest } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <CustomTextField
        fullWidth
        {...field}
        sx={{
          '& .MuiInputBase-root': {
            borderRadius: 2,
            fieldset: {
              borderColor: (theme) => theme.palette.grey[300],
            },
            ...sx,
          },
        }}
        label={
          <Stack direction="row" gap={0.5}>
            {label}
            {props.isRequired && (
              <Typography sx={{ color: (theme) => theme.palette.primary.dark }}>
                *
              </Typography>
            )}
          </Stack>
        }
        {...rest}
        type={isPasswordVisible || !type ? 'text' : type}
        error={
          (fieldState?.isTouched || formState?.isSubmitted) &&
          Boolean(fieldState?.error)
        }
        helperText={
          (fieldState?.isTouched || formState?.isSubmitted) &&
          fieldState?.error?.message
        }
        InputProps={{
          sx: { borderRadius: 0 },
          endAdornment:
            fieldState?.error || type === 'password' ? (
              <InputAdornment position="end">
                {type === 'password' ? (
                  <IconButton
                    disabled={props.disabled}
                    onClick={() =>
                      setIsPasswordVisible((prevState) => !prevState)
                    }
                  >
                    {isPasswordVisible ? (
                      <VisibilityOffIcon />
                    ) : (
                      <RemoveRedEyeIcon />
                    )}
                  </IconButton>
                ) : null}
              </InputAdornment>
            ) : null,
        }}
      />
    </>
  );
}

HookTextField.propTypes = {
  label: PropTypes.any,
  isNotRequired: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  sx: PropTypes.object,
  secondaryLabel: PropTypes.element,
  isRequired: PropTypes.bool,
};
