import React from 'react';

import DescriptionIcon from '@mui/icons-material/Description';
import Divider from '@mui/material/Divider';

import BalanceBanner from 'components/classifier/banner/BalanceBanner';
import Categories from 'components/classifier/categories/Categories';
import Location from 'components/classifier/locations/Location';
import CustomButton from 'components/common/buttons/CustomButton';
import MobileHeader from 'components/header/MobileHeader';

const reportBtnSx = {
  position: 'fixed',
  bottom: '48px',
  right: '16px',
  px: 2.2,
  py: 1.2,
  borderRadius: 10,
  backgroundColor: (theme) => theme.palette.primary.main,
  boxShadow: '0px 8px 24px 0px rgba(0, 100, 204, 0.32)',
};

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
      <CustomButton
        variant={'contained'}
        startIcon={<DescriptionIcon />}
        sx={reportBtnSx}
      >
        Generate Report
      </CustomButton>
    </div>
  );
};

export default Classifier;
