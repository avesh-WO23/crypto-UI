import React from "react";
import BalanceBanner from "./banner/BalanceBanner";
import Location from "./locations/Location";
import Categories from "./categories/Categories";
import ReportButton from "../common/buttons/ReportButton";
import { Divider } from "@mui/material";

const Classifier = () => {
  return (
    <>
      <BalanceBanner />
      <Location />
      <Divider />
      <Categories />
      <ReportButton />
    </>
  );
};

export default Classifier;
