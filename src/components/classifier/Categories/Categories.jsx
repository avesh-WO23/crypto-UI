import React from "react";
import { Chip, Typography, styled, Box } from "@mui/material";

const CategoryLists = ["Terrorism", "Exchange", "Sanctions", "Criminal"];
const Container = styled(Box)({
  padding: "16px",
});

const Heading = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
});

const CategoriesList = styled(Box)({
  paddingTop: "20px",
  display: "flex",
  gap: "8px",
  fontWeight: 700,
});

const CategoryChip = styled(Chip)({
  backgroundColor: "#F1F4F6",
});

const Categories = () => {
  return (
    <Container>
      <Heading>Categories</Heading>
      <CategoriesList>
        {CategoryLists.map((category) => {
          return <CategoryChip label={category} />;
        })}
      </CategoriesList>
    </Container>
  );
};

export default Categories;
