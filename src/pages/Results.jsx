import React from 'react';

import MobileHeader from 'components/header/MobileHeader';

import SearchedResults from '../components/results/SearchedResults';

const Results = () => {
  return (
    <>
      <MobileHeader isFilters={true} isHelp={true} />
      <SearchedResults />
    </>
  );
};

export default Results;
