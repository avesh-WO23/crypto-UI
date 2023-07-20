import { Box, Typography, styled } from "@mui/material";
import React from "react";
import SeverityButton from "../../common/buttons/SeverityButton";

const Banner = styled(Box)({
  padding: "16px",
  backgroundImage: "linear-gradient(45deg, white 40% , #FF891A30);",
});

const Heading = styled(Typography)({
  fontSize: "16px",
  color: "#5E6974",
  fontWeight: 500,
});

const BalanceBanner = () => {
  return (
    <Banner>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" fontSize={18}>
          WvzFY5rVKogxzRbWv
        </Typography>
        <SeverityButton text="Medium" bgColor="#FF891A" color="#000" />
      </Box>
      <Box>
        <Heading variant="h3">Total Balance</Heading>
        <Typography variant="h1" fontSize={23}>
          802 $
        </Typography>
      </Box>
    </Banner>
  );
};

export default BalanceBanner;
