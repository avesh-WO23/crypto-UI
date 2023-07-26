import React from 'react';

import Divider from '@mui/material/Divider';

import BalanceBanner from '../components/classifier/banner/BalanceBanner';
import Categories from '../components/classifier/categories/Categories';
import Location from '../components/classifier/locations/Location';
import BackButton from '../components/common/buttons/BackButton';
import ReportButton from '../components/common/buttons/ReportButton';
import { Container } from '../components/common/Container';

const Classifier = () => {
  return (
    <div
      style={{
        paddingBottom: '90px',
      }}
    >
      <Container
        sx={{
          backgroundColor: '#F1F4F6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <BackButton />
      </Container>
      <BalanceBanner bgColor="#FF891A" color="#000" buttonText={'Medium'} />
      <Location />
      <Divider />
      <Categories />
      <ReportButton sx={{ position: 'fixed', bottom: '48px', right: '16px' }} />
    </div>
  );
};

export default Classifier;
