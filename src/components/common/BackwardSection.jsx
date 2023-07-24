import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container } from "../common/Container";
import { Button, styled, Box } from "@mui/material";
import HelpIcon from "../../assets/svg/help.svg";
import SortIcon from "../../assets/svg/Sort.svg";
import FilterIcon from "../../assets/svg/Filter.svg";

const HelpButton = styled(Button)({
  backgroundImage: `url(${HelpIcon})`,
  backgroundRepeat: "no-repeat",
  height: "24px",
  width: "24px",
  minWidth: "24px",
});

const BackButton = styled(Button)({
  display: "contents",
  color: "#121E28",
});

const ButtonBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "18px",
});

const OutlineButton = styled("button")({
  border: "1px solid #0064CC",
  borderRadius: "8px",
  padding: "8px 16px",
  backgroundColor: "transparent",
  color: "#0064CC",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
  cursor: "pointer",
});
const SortIconSpan = styled("span")({
  backgroundImage: `url(${SortIcon})`,
  backgroundRepeat: "no-repeat",
  width: "24px",
  height: "24px",
  backgroundSize: "24px",
  backgroundPosition: "left center",
  padding: "8px 14px",
});
const FilterIconSpan = styled("span")({
  backgroundImage: `url(${FilterIcon})`,
  backgroundRepeat: "no-repeat",
  width: "24px",
  height: "24px",
  backgroundSize: "24px",
  backgroundPosition: "left center",
  padding: "8px 14px",
});

const Filters = styled(Box)({ display: "flex", gap: "8px" });

const BackwardSection = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#F1F4F6",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <BackButton>
        <ArrowBackIcon />
      </BackButton>
      <ButtonBox>
        <Filters>
          <OutlineButton>
            <SortIconSpan />
            Sort
          </OutlineButton>
          <OutlineButton>
            <FilterIconSpan />
            Filter
          </OutlineButton>
        </Filters>
        <HelpButton />
      </ButtonBox>
    </Container>
  );
};

export default BackwardSection;
