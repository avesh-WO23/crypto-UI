import React from "react";
import { styled, Box, Button, Typography } from "@mui/material";
import SeverityButton from "../common/SeverityButton";

const Banner = styled(Box)({
  padding: "16px",
  //   backgroundColor: "#FF891A",
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
        <Heading variant="h3" fontSize={14}>
          Total Balance
        </Heading>
        <Typography variant="h1" fontSize={23}>
          $850
        </Typography>
      </Box>
    </Banner>
  );
};

export default BalanceBanner;
