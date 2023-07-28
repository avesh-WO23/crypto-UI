import React from 'react';

import Divider from '@mui/material/Divider';

import BalanceBanner from 'components/classifier/banner/BalanceBanner';
import Categories from 'components/classifier/categories/Categories';
import Location from 'components/classifier/locations/Location';
import ReportButton from 'components/common/buttons/ReportButton';
import MobileHeader from 'components/header/MobileHeader';

const Classifier = () => {
  return (
    <div
      style={{
        paddingBottom: '90px',
      }}
    >
      <MobileHeader />
      <BalanceBanner
        balance={{
          id: 1,
          status: 'Medium',
          amount: 802,
          currency: '$',
        }}
      />
      <Location />
      <Divider />
      <Categories />
      <ReportButton sx={{ position: 'fixed', bottom: '48px', right: '16px' }} />
    </div>
  );
};

export default Classifier;
