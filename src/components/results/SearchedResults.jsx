import React, { useState } from "react";
import { Container } from "../common/Container";
import BalanceBanner from "../classifier/banner/BalanceBanner";
import ReportPopper from "../results/ReportPopper";

const DummyResults = [
  {
    id: 1,
    balanceValue: "802$",
    buttonText: "Severe",
    bgColor: "#A7081E",
    color: "#fff",
  },
  {
    id: 2,
    balanceValue: "217$",
    buttonText: "Medium",
    bgColor: "#FF891A",
    color: "#000",
  },
  {
    id: 3,
    balanceValue: "805$",
    buttonText: "Low",
    bgColor: "#BDC3C8",
    color: "#000",
  },
  {
    id: 4,
    balanceValue: "530$",
    buttonText: "High",
    bgColor: "#D30813",
    color: "#fff",
  },
  {
    id: 5,
    balanceValue: "602$",
    buttonText: "Low",
    bgColor: "#BDC3C8",
    color: "#000",
  },
];

const SearchedResults = () => {
  // const [balanceData, setBalanceData] = useState(DummyResults);
  const [selectedBalance, setSelectedBalance] = useState([]);

  const handleSelectedBalance = (id) => {
    setSelectedBalance((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((val) => val !== id)
        : [...prevIds, id]
    );
  };

  return (
    <>
      <Container sx={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {DummyResults.map((balance, ind) => (
            <BalanceBanner
              key={balance.id}
              balance={balance}
              handleSelectedBalance={() => handleSelectedBalance(balance?.id)}
              selectedBalance={selectedBalance}
              setSelectedBalance={setSelectedBalance}
              isResultPage
            />
          ))}
        </div>
        {selectedBalance?.length ? (
          <ReportPopper
            selectedBalance={selectedBalance}
            setSelectedBalance={setSelectedBalance}
          />
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default SearchedResults;
