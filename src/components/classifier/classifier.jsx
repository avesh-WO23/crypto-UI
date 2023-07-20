import React from "react";
import BalanceBanner from "./banner/BalanceBanner";
import Location from "./locations/Location";
import Categories from "./categories/Categories";
import ReportButton from "../common/buttons/ReportButton";

const Classifier = () => {
  return (
    <>
      <BalanceBanner />
      <Location />
      <Categories />
      <ReportButton />
    </>
  );
};

export default Classifier;
