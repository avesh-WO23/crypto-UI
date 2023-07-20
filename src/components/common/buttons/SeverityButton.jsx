import React from "react";
import { Button, styled } from "@mui/material";

const MainButton = styled(Button)({
  borderRadius: "10px",
  padding: "5px 10px",
  fontWeight: "bold",
  fontSize: "14px",
});

const SeverityButton = ({ text, bgColor, color }) => {
  return (
    <MainButton sx={{ bgcolor: bgColor, color: color }}>{text}</MainButton>
  );
};

export default SeverityButton;
