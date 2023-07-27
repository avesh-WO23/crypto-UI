import React from 'react';

import { Box, Typography, styled } from '@mui/material';

import { Container } from 'components/common/Container';
import { SectionHeading } from 'components/common/styled/SectionHeading';

const CategoryLists = ['Terrorism', 'Exchange', 'Sanctions', 'Criminal'];

const CategoriesList = styled(Box)({
  paddingTop: '20px',
  display: 'flex',
  gap: '8px',
  fontWeight: 700,
});

const chipSx = {
  backgroundColor: (theme) => theme.palette.grey[200],
  padding: '4px 8px',
  px: 1,
  py: 0.5,
  borderRadius: '8px',
};

const Categories = () => {
  return (
    <Container>
      <SectionHeading>Categories</SectionHeading>
      <CategoriesList>
        {CategoryLists.map((category, ind) => {
          return (
            <Typography
              variant="subtitle"
              sx={chipSx}
              key={`${category}-${ind}`}
            >
              {category}
            </Typography>
          );
        })}
      </CategoriesList>
    </Container>
  );
};

export default Categories;
