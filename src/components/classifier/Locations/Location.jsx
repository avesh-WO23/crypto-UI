import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
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

const StaticMenu = [
  "All locations",
  "USA",
  "India",
  "Greece",
  "Colombia",
  "Israel",
  "Germany",
];

const Location = () => {
  const [country, setCountry] = useState(StaticMenu[0]);
  return (
    <>
      <LocationContainer>
        <Heading variant="h2">Location</Heading>
        <LocationMenu
          country={country}
          setCountry={setCountry}
          StaticMenu={StaticMenu}
        />
      </LocationContainer>
      <StackedBarChart country={country} setCountry={setCountry} />
    </>
  );
};

export default Location;
