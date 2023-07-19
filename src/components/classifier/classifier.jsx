import React from "react";
import BalanceBanner from "./banner/BalanceBanner";
import Location from "./locations/Location";
import Categories from "./categories/Categories";

const Classifier = () => {
  return (
    <>
      <BalanceBanner />
      <Location />
      <Categories />
    </>
  );
};

export default Classifier;
