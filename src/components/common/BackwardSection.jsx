import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, styled } from "@mui/material";
import React from "react";
import { content } from "../../static/backwardSection";
import { Container } from "../common/Container";
import OutlineButton from "./buttons/OutlineButton";

const HelpButton = styled(Button)(({ path }) => ({
  backgroundImage: `url(${path})`,
  backgroundRepeat: "no-repeat",
  height: "24px",
  width: "24px",
  minWidth: "24px",
}));

const BackButton = styled(Button)({
  display: "contents",
  color: "#121E28",
});

const ButtonBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "18px",
});

const IconSpan = styled("span")(({ path }) => ({
  backgroundImage: `url(${path})`,
  backgroundRepeat: "no-repeat",
  width: "24px",
  height: "24px",
  backgroundSize: "24px",
  backgroundPosition: "left center",
  padding: "8px 14px",
}));

const Filters = styled(Box)({ display: "flex", gap: "8px" });

const BackwardSection = () => {
  const { filterButtons, helpButton } = content;
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
          {filterButtons.map((btn, i) => (
            <OutlineButton key={`${btn.text}-${i}`}>
              <IconSpan path={btn.icon} />
              {btn.text}
            </OutlineButton>
          ))}
        </Filters>
        <HelpButton path={helpButton} />
      </ButtonBox>
    </Container>
  );
};

export default BackwardSection;
