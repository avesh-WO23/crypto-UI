import React, { useMemo } from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Checkbox,
  Divider,
  Grid,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { PropTypes } from 'prop-types';

import WalletIcon from 'assets/svg/wallet.svg';
import SeverityLabel from 'components/common/buttons/SeverityLabel';
import { Container } from 'components/common/Container';

const HeadingStyle = {
  color: (theme) => theme.palette.grey[600],
  width: '100px',
};

const WalletIconSpan = styled('span')({
  backgroundImage: `url(${WalletIcon})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left bottom 2px',
  width: '30px',
  height: '30px',
});

const settings = {
  severe: {
    bgColor: '#EB1633',
    color: '#fff',
    borderColor: '#FAC5C5',
  },
  medium: {
    bgColor: '#FF891A',
    color: '#000',
    borderColor: '#FFECB2',
  },
  low: {
    bgColor: '#979797',
    color: '#000',
    borderColor: '#BDC3C8',
  },
  high: {
    bgColor: '#EB1633',
    color: '#fff',
    borderColor: '#FAC5C5',
  },
};

const walletIdSx = {
  maxWidth: '155px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

const BalanceBanner = ({
  balance,
  isResultPage = false,
  handleSelectedBalance,
  selectedBalance,
}) => {
  const { status, amount, id, currency } = balance;
  const colorSetting = useMemo(() => settings[status.toLowerCase()], [status]);

  return (
    <Container
      sx={{
        backgroundImage: !selectedBalance?.includes(id)
          ? `linear-gradient(45deg, white 40% , ${colorSetting?.bgColor}30);`
          : 'none',
        p: 2,
        border: (theme) =>
          isResultPage && !selectedBalance?.includes(id)
            ? `1px solid ${colorSetting?.borderColor}`
            : isResultPage && selectedBalance?.includes(id)
            ? `1px solid ${theme.palette.primary.main}`
            : 'none',
        boxShadow: isResultPage ? '0 4px 12px #00000012' : '',
        borderRadius: isResultPage ? '8px' : '',
        backgroundColor: (theme) =>
          selectedBalance?.includes(id)
            ? theme.palette.secondary.light
            : 'none',
      }}
    >
      {isResultPage && (
        <Grid item xs={1.5}>
          <Checkbox
            sx={{ pl: 0, pt: '6px' }}
            checked={selectedBalance?.includes(id)}
            onChange={handleSelectedBalance}
          />
        </Grid>
      )}
      <Grid item xs={isResultPage ? 10.5 : 12}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack direction={'row'} alignItems={'center'}>
            <WalletIconSpan />
            <Typography variant="display6" sx={walletIdSx}>
              WvzFY5rVKogxzRbWv
            </Typography>
          </Stack>
          <SeverityLabel
            text={status}
            bgColor={colorSetting?.bgColor}
            color={colorSetting?.color}
          />
        </Stack>
        <Stack
          direction="row"
          divider={
            !isResultPage ? <Divider orientation="vertical" flexItem /> : ''
          }
          spacing={2}
          pt={2}
          position={'relative'}
        >
          <Stack justifyContent={'center'}>
            <Typography
              variant="display7"
              sx={{ color: (theme) => theme.palette.grey[600] }}
            >
              Total Balance
            </Typography>
            <Typography variant="h3" pt={1}>
              {amount}
              {currency}
            </Typography>
          </Stack>
          <Stack>
            {!isResultPage ? (
              <Box display={'flex'} flexDirection={'column'} gap={2}>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography variant="display7" sx={HeadingStyle}>
                    Total Spent
                  </Typography>
                  <Typography
                    variant="display7"
                    sx={{
                      color: (theme) => theme.palette.primary.dark,
                    }}
                  >
                    600 $
                  </Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography variant="display7" sx={HeadingStyle}>
                    Total Received
                  </Typography>
                  <Typography
                    variant="display7"
                    sx={{
                      color: (theme) => theme.palette.primary.dark,
                    }}
                  >
                    1050 $
                  </Typography>
                </Stack>
              </Box>
            ) : (
              <ArrowForwardIcon
                sx={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  color: (theme) => theme.palette.primary.main,
                }}
              />
            )}
          </Stack>
        </Stack>
      </Grid>
    </Container>
  );
};

BalanceBanner.propTypes = {
  balance: PropTypes.object,
  isResultPage: PropTypes.bool,
  handleSelectedBalance: PropTypes.func,
  selectedBalance: PropTypes.array,
};
export default BalanceBanner;
