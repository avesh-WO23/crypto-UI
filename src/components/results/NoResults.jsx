import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NoResult from 'assets/svg/No-Result.svg';

const ImageContentSx = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 3,
  mt: 15,
};

const NoResults = () => {
  return (
    <Box sx={ImageContentSx}>
      <Box component={'img'} src={NoResult} alt="error-result" />
      <Typography variant="h6">
        Sorry. We didn&apos;t find any results.
      </Typography>
    </Box>
  );
};

export default NoResults;
