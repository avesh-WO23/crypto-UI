import React from "react";
import { Button, styled } from "@mui/material";

const BannerButton = styled(Button)({
  borderRadius: "7px",
  padding: "0 18px",
  fontWeight: "bold",
  fontSize: "14px",
  textTransform: "capitalize",
});

const SeverityButton = ({ text, bgColor, color, sx, ...props }) => {
  return (
    <BannerButton sx={{ bgcolor: bgColor, color: color, ...sx }} {...props}>
      {text}
    </BannerButton>
  );
};

export default SeverityButton;
