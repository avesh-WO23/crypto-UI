import React from "react";
import { Button, styled, Box } from "@mui/material";
import ReportIcon from "../../../assets/svg/Report.svg";

const Container = styled(Box)({
  padding: "16px",
});

const GenerateButton = styled(Button)({
  padding: "10px 10px 10px 45px",
  marginBottom: "30px",
  borderRadius: "50px",
  color: "#fff",
  backgroundColor: "#0064CC",
  backgroundImage: `url(${ReportIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left 15px center",
  fontSize: "12px",
});

const ReportButton = () => {
  return (
    <Container sx={{ textAlign: "right" }}>
      <GenerateButton>Generate report</GenerateButton>
    </Container>
  );
};

export default ReportButton;
