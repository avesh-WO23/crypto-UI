import React from "react";
import { Container } from "../common/Container";
import BalanceBanner from "../classifier/banner/BalanceBanner";

const DummyResults = [
  {
    balance: "802$",
    buttonText: "Severe",
    bgColor: "#A7081E",
    color: "#fff",
  },
  {
    balance: "217$",
    buttonText: "Medium",
    bgColor: "#FF891A",
    color: "#000",
  },
  {
    balance: "802$",
    buttonText: "Low",
    bgColor: "#BDC3C8",
    color: "#000",
  },
  {
    balance: "530$",
    buttonText: "High",
    bgColor: "#D30813",
    color: "#fff",
  },
  {
    balance: "802$",
    buttonText: "Low",
    bgColor: "#BDC3C8",
    color: "#000",
  },
];

const SearchedResults = () => {
  const generateReport = () => {};
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {DummyResults.map((result, ind) => (
          <BalanceBanner
            bgColor={result.bgColor}
            color={result.color}
            buttonText={result.buttonText}
            key={`${result.buttonText}-${ind}`}
            generateReport={generateReport}
            isResultPage
          />
        ))}
      </div>
    </Container>
  );
};

export default SearchedResults;
