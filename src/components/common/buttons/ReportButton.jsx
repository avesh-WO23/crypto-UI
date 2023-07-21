import { Box, Button, styled } from "@mui/material";
import React from "react";
import ReportIcon from "../../../assets/svg/Report.svg";

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
  textTransform: "capitalize",
  fontWeight: 600,
});

const ReportButton = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "right", marginLeft: "-16px" }}>
      <GenerateButton>Generate report</GenerateButton>
    </Box>
  );
};

export default ReportButton;
