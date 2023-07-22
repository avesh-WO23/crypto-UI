import React from "react";
import BalanceBanner from "../components/classifier/banner/BalanceBanner";
import Location from "../components/classifier/locations/Location";
import Categories from "../components/classifier/categories/Categories";
import ReportButton from "../components/common/buttons/ReportButton";
import { Divider } from "@mui/material";

const Classifier = () => {
  return (
    <>
      <BalanceBanner bgColor="#FF891A" color="#000" buttonText={"Medium"} />
      <Location />
      <Divider />
      <Categories />
      <ReportButton />
    </>
  );
};

export default Classifier;
