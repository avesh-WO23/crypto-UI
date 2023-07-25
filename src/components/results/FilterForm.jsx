import React from "react";
import BalanceRange from "./BalanceRange";
import { Box, Typography, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "../common/Container";

const HeadingBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const FilterForm = () => {
  return (
    <Container sx={{ padding: "24px" }}>
      <HeadingBox>
        <Typography fontWeight={600}>Filters</Typography>
        <CloseIcon />
      </HeadingBox>
      <BalanceRange />
    </Container>
  );
};

export default FilterForm;
