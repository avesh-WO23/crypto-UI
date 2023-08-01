import { useState } from 'react';

import BalanceBanner from '../classifier/banner/BalanceBanner';
import { Container } from '../common/Container';
import ReportPopper from '../results/ReportPopper';
import NoResults from './NoResults';

const DummyResults = [
  {
    id: 1,
    amount: 802,
    currency: '$',
    status: 'Severe',
  },
  {
    id: 2,
    amount: 217,
    currency: '$',
    status: 'Medium',
  },
  {
    id: 3,
    amount: 805,
    currency: '$',
    status: 'Low',
  },
  {
    id: 4,
    amount: 530,
    currency: '$',
    status: 'High',
  },
  {
    id: 5,
    amount: 602,
    currency: '$',
    status: 'Low',
  },
];

const SearchedResults = () => {
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
      <Container sx={{ position: 'relative' }} gap={2}>
        {DummyResults.length ? (
          DummyResults.map((balance) => (
            <BalanceBanner
              key={balance.id}
              balance={balance}
              handleSelectedBalance={() => handleSelectedBalance(balance?.id)}
              selectedBalance={selectedBalance}
              isResultPage
            />
          ))
        ) : (
          <NoResults />
        )}
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
