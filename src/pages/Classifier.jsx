import { Divider } from "@mui/material";
import React from "react";
import BalanceBanner from "../components/classifier/banner/BalanceBanner";
import Categories from "../components/classifier/categories/Categories";
import Location from "../components/classifier/locations/Location";
import { Container } from "../components/common/Container";
import BackButton from "../components/common/buttons/BackButton";
import ReportButton from "../components/common/buttons/ReportButton";

const Classifier = () => {
  return (
    <div
      style={{
        paddingBottom: "90px",
      }}
    >
      <Container
        sx={{
          backgroundColor: "#F1F4F6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BackButton />
      </Container>
      <BalanceBanner bgColor="#FF891A" color="#000" buttonText={"Medium"} />
      <Location />
      <Divider />
      <Categories />
      <ReportButton sx={{ position: "fixed", bottom: "48px", right: "16px" }} />
    </div>
  );
};

export default Classifier;
