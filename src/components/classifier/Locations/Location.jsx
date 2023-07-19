import { Box, Typography, styled } from "@mui/material";
import React from "react";
import LocationMenu from "./LocationMenu";
import StackedBarChart from "./StackedChart";

const LocationContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
});

const Heading = styled(Typography)({
  fontSize: "18px",
  fontWeight: 600,
});

const Location = () => {
  return (
    <>
      <LocationContainer>
        <Heading variant="h2">Location</Heading>
        <LocationMenu />
      </LocationContainer>
      <StackedBarChart />
    </>
  );
};

export default Location;
