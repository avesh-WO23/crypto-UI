import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-drawer/FilterDrawerSlice";
import FilterForm from "./FilterForm";

export default function FilterDrawer() {
  const dispatch = useDispatch();
  const open = useSelector((state) => {
    return state.filterDrawer;
  });

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(filterActions.toggleDrawer());
  };

  const list = () => (
    <Box
      // sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={dispatch(toggleDrawer(false))}
      // onKeyDown={dispatch(toggleDrawer(false))}
    >
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <FilterForm />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"bottom"}
          open={open}
          onClose={toggleDrawer()}
          onOpen={toggleDrawer()}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
