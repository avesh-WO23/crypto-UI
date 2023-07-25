import React from "react";
import { Button, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackBtn = styled(Button)({
  display: "contents",
  color: "#121E28",
});

const BackButton = () => {
  return (
    <BackBtn>
      <ArrowBackIcon />
    </BackBtn>
  );
};

export default BackButton;
