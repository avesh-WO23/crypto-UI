import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Container } from 'components/common/Container';

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
      <Typography variant="h6">Categories</Typography>
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
