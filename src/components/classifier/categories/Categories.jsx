import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Container } from 'components/common/Container';
import { SectionHeading } from 'components/common/styled/SectionHeading';

const CategoryLists = ['Terrorism', 'Exchange', 'Sanctions', 'Criminal'];

const chipSx = {
  backgroundColor: (theme) => theme.palette.grey[200],
  px: 1,
  py: 0.5,
  borderRadius: 2,
};

const Categories = () => {
  return (
    <Container>
      <SectionHeading>Categories</SectionHeading>
      <Box display={'flex'} gap={1} pt={2}>
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
      </Box>
    </Container>
  );
};

export default Categories;
