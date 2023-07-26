import React from 'react';

import { Box, styled } from '@mui/material';

import { Container } from '../../common/Container';
import { SectionHeading } from '../../common/styled/SectionHeading';

const CategoryLists = ['Terrorism', 'Exchange', 'Sanctions', 'Criminal'];

const CategoriesList = styled(Box)({
  paddingTop: '20px',
  display: 'flex',
  gap: '8px',
  fontWeight: 700,
});

const CategoryChip = styled('label')({
  backgroundColor: '#F1F4F6',
  fontSize: '14px',
  fontWeight: 'bold',
  padding: '4px 8px',
  borderRadius: '8px',
});

const Categories = () => {
  return (
    <Container>
      <SectionHeading>Categories</SectionHeading>
      <CategoriesList>
        {CategoryLists.map((category, ind) => {
          return (
            <CategoryChip key={`${category}-${ind}`}>{category}</CategoryChip>
          );
        })}
      </CategoriesList>
    </Container>
  );
};

export default Categories;
