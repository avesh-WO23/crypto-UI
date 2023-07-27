import * as React from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import { PropTypes } from 'prop-types';

const MenuButton = styled(Button)(({ theme }) => ({
  'textTransform': 'capitalize',
  'fontWeight': 600,
  'fontSize': '16px',
  'borderRadius': '8px',
  '&.MuiButton-contained.MuiButton-containedPrimary': {
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.main,
    },
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    'borderRadius': 8,
    'marginTop': theme.spacing(1),
    'minWidth': 180,
    'color': '#374151',
    'boxShadow':
      '0px 20px 40px -4px rgba(145, 158, 171, 0.24), 0px 0px 2px 0px rgba(145, 158, 171, 0.24)',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      backgroundColor: theme.palette.grey[300],
    },
  },
}));

const ITEM_HEIGHT = 48;

export default function LocationMenu({ country, setCountry, StaticMenu }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (menu) => {
    setCountry(menu);
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuButton
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={{
          backgroundColor: (theme) =>
            country === 'All locations'
              ? 'transparent'
              : theme.palette.secondary.light,
          color: (theme) =>
            country === 'All locations' ? '#000' : theme.palette.primary.main,
        }}
        endIcon={anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        {country}
      </MenuButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(country)}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        {StaticMenu.map((menu, ind) => {
          return (
            <MenuItem
              key={`${menu}-${ind}`}
              onClick={() => handleClose(menu)}
              disableRipple
            >
              {menu}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
}

LocationMenu.propTypes = {
  country: PropTypes.string,
  setCountry: PropTypes.func,
  StaticMenu: PropTypes.array,
};
