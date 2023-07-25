import React from "react";
import { Button, styled } from "@mui/material";

const SeverityText = styled("label")({
  borderRadius: "8px",
  padding: "5px 16px",
  fontWeight: "bold",
  fontSize: "14px",
  textTransform: "capitalize",
});

const SeverityLabel = ({ text, bgColor, color, sx, ...props }) => {
  return (
    <SeverityText sx={{ bgcolor: bgColor, color: color, ...sx }} {...props}>
      {text}
    </SeverityText>
  );
};

export default SeverityLabel;
