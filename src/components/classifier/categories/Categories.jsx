import { Box, Chip, styled } from "@mui/material";
import React from "react";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/styled/SectionHeading";

const CategoryLists = ["Terrorism", "Exchange", "Sanctions", "Criminal"];

const CategoriesList = styled(Box)({
  paddingTop: "20px",
  display: "flex",
  gap: "8px",
  fontWeight: 700,
});

const CategoryChip = styled(Chip)({
  backgroundColor: "#F1F4F6",
  fontSize: "14px",
  fontWeight: "bold",
});

const Categories = () => {
  return (
    <Container>
      <SectionHeading>Categories</SectionHeading>
      <CategoriesList>
        {CategoryLists.map((category, ind) => {
          return <CategoryChip key={`${category}-${ind}`} label={category} />;
        })}
      </CategoriesList>
    </Container>
  );
};

export default Categories;
