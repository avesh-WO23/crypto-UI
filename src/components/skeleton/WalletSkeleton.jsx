import React from 'react';

import { useTheme } from '@emotion/react';
import { Box, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const WalletSkeleton = () => {
  const theme = useTheme();
  return (
    <Stack px={2} pt={2}>
      {/* For variant="text", adjust the height via font-size */}
      <Box display={'flex'} justifyContent={'space-between'}>
        <Skeleton
          variant="rounded"
          width="50%"
          height={24}
          sx={{ backgroundColor: theme.palette.grey[100] }}
        />
        <Skeleton
          variant="rounded"
          height={24}
          width="20%"
          sx={{ backgroundColor: theme.palette.grey[100] }}
        />
      </Box>
      <Skeleton
        variant="rounded"
        width={'60%'}
        height={55}
        sx={{ mt: 2, backgroundColor: theme.palette.grey[100] }}
      />
      <Skeleton
        variant="rounded"
        height={24}
        width="20%"
        sx={{ mt: 2, backgroundColor: theme.palette.grey[100] }}
      />

      <Box
        position={'relative'}
        display={'flex'}
        justifyContent={'center'}
        mt={3}
      >
        <Skeleton
          variant="circular"
          width={200}
          height={200}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: theme.palette.grey[100],
          }}
        ></Skeleton>
        <Skeleton
          variant="circular"
          sx={{
            backgroundColor: '#fff',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          width={110}
          height={110}
        />
      </Box>
      <Grid container xs={10} columnSpacing={5} rowSpacing={3} mt={2}>
        <Grid item xs={6}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
        <Grid item xs={6}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
        <Grid item xs={6}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
        <Grid item xs={6}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
        <Grid item xs={6}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
        <Grid item xs={6}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
      </Grid>
      <Skeleton
        variant="rectangular"
        height={1}
        width="100%"
        sx={{ mt: 5, backgroundColor: theme.palette.grey[100] }}
      />
      <Grid container columnSpacing={2} mt={5}>
        <Grid item xs={3}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
        <Grid item xs={3}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
        <Grid item xs={3}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
        <Grid item xs={3}>
          <Skeleton
            variant="rounded"
            height={24}
            sx={{ backgroundColor: theme.palette.grey[100] }}
          />
        </Grid>
      </Grid>
      <Box display={'flex'} justifyContent={'flex-end'} mt={5}>
        <Skeleton
          variant="rounded"
          height={50}
          width={170}
          sx={{ backgroundColor: theme.palette.grey[100], borderRadius: 20 }}
        />
      </Box>
    </Stack>
  );
};

export default WalletSkeleton;
