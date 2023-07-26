import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";

const MenuButton = styled(Button)({
  textTransform: "capitalize",
  fontWeight: 600,
  fontSize: "16px",
  borderRadius: "8px",
  fontSize: "16px",
  "&.MuiButton-contained.MuiButton-containedPrimary": {
    "&:hover": {
      backgroundColor: "#E8F2FF",
      color: "#0064CC",
    },
  },
});

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 8,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
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
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={{
          backgroundColor:
            country === "All locations" ? "transparent" : "#E8F2FF",
          color: country === "All locations" ? "#000" : "#0064CC",
        }}
        endIcon={anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        {country}
      </MenuButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
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
