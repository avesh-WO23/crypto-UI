import React, { useState } from 'react';

import BalanceBanner from '../classifier/banner/BalanceBanner';
import { Container } from '../common/Container';
import ReportPopper from '../results/ReportPopper';
import FilterDrawer from './FilterDrawer';

const DummyResults = [
  {
    id: 1,
    balanceValue: '802$',
    buttonText: 'Severe',
    bgColor: '#EB1633',
    color: '#fff',
    borderColor: '#FAC5C5',
  },
  {
    id: 2,
    balanceValue: '217$',
    buttonText: 'Medium',
    bgColor: '#FF891A',
    color: '#000',
    borderColor: '#FFECB2',
  },
  {
    id: 3,
    balanceValue: '805$',
    buttonText: 'Low',
    bgColor: '#979797',
    color: '#000',
    borderColor: '#BDC3C8',
  },
  {
    id: 4,
    balanceValue: '530$',
    buttonText: 'High',
    bgColor: '#EB1633',
    color: '#fff',
    borderColor: '#FAC5C5',
  },
  {
    id: 5,
    balanceValue: '602$',
    buttonText: 'Low',
    bgColor: '#979797',
    color: '#000',
    borderColor: '#BDC3C8',
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
      <Container sx={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {DummyResults.map((balance, ind) => (
            <BalanceBanner
              key={balance.id}
              balance={balance}
              handleSelectedBalance={() => handleSelectedBalance(balance?.id)}
              selectedBalance={selectedBalance}
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
        <FilterDrawer />
      </Container>
    </>
  );
};

export default SearchedResults;
