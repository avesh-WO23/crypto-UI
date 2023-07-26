import React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Checkbox, Typography, styled } from '@mui/material';
import { PropTypes } from 'prop-types';

import WalletIcon from '../../../assets/svg/wallet.svg';
import SeverityLabel from '../../common/buttons/SeverityLabel';
import { Container } from '../../common/Container';
import { SectionHeading } from '../../common/styled/SectionHeading';
import styles from './styles.module.css';

const HeadingStyle = {
  fontWeight: 700,
  fontSize: '12px',
  color: '#5E6974',
  width: '100px',
};

const WalletText = styled(Typography)({
  fontSize: '14px',
  fontWeight: 700,
});

const WalletIconSpan = styled('span')({
  backgroundImage: `url(${WalletIcon})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left bottom 2px',
  width: '30px',
  height: '30px',
});

const BalanceBanner = ({
  balance,
  isResultPage = false,
  bgColor,
  buttonText,
  color,
  handleSelectedBalance,
  selectedBalance,
}) => {
  return (
    <>
      <Container
        sx={{
          backgroundImage: !selectedBalance?.includes(balance?.id)
            ? `linear-gradient(45deg, white 40% , ${
                balance?.bgColor ? balance.bgColor : bgColor
              }30);`
            : 'none',
          padding: '16px 16px',
          border:
            isResultPage && !selectedBalance?.includes(balance?.id)
              ? `1px solid ${balance?.borderColor}`
              : isResultPage && selectedBalance?.includes(balance?.id)
              ? '1px solid #0064CC'
              : 'none',
          position: isResultPage ? 'relative' : 'static',
          boxShadow: isResultPage ? '0 4px 12px #00000012' : '',
          borderRadius: isResultPage ? '8px' : '',
          backgroundColor: selectedBalance?.includes(balance?.id)
            ? '#E8F2FF'
            : 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          {isResultPage && (
            <Checkbox
              sx={{ padding: '0 16px 0 0' }}
              checked={selectedBalance?.includes(balance?.id)}
              onChange={handleSelectedBalance}
            />
          )}
          <div style={{ width: '100%' }}>
            <div className={styles.walletHeading}>
              <div className={styles.walletIcon}>
                <WalletIconSpan />
                <WalletText variant="h2">WvzFY5rVKogxzRbWv</WalletText>
              </div>
              <SeverityLabel
                text={balance?.buttonText ? balance.buttonText : buttonText}
                bgColor={balance?.bgColor ? balance.bgColor : bgColor}
                color={balance?.color ? balance.color : color}
              />
            </div>
            <div className={styles.mainBalanceBox}>
              <div
                className={styles.totalBalance}
                style={{
                  borderRight: !isResultPage ? '1px solid #adb9bf' : 'none',
                }}
              >
                <SectionHeading variant="h4" sx={HeadingStyle}>
                  Total Balance
                </SectionHeading>
                <Typography
                  variant="h1"
                  fontSize={28}
                  fontWeight={700}
                  paddingTop={'10px'}
                >
                  {balance?.balanceValue ? balance.balanceValue : '802$'}
                </Typography>
              </div>
              {!isResultPage ? (
                <div className={styles.totalRemains}>
                  <div className={styles.remainingBalance}>
                    <SectionHeading variant="h4" sx={HeadingStyle}>
                      Total Spent
                    </SectionHeading>
                    <Typography variant="p" fontSize={'12px'} fontWeight={600}>
                      600 $
                    </Typography>
                  </div>
                  <div className={styles.remainingBalance}>
                    <SectionHeading variant="h4" sx={HeadingStyle}>
                      Total Received
                    </SectionHeading>
                    <Typography variant="p" fontSize={'12px'} fontWeight={600}>
                      1050 $
                    </Typography>
                  </div>
                </div>
              ) : (
                <span className={styles.arrowIcon}>
                  <ArrowForwardIcon />
                </span>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

BalanceBanner.propTypes = {
  balance: PropTypes.object,
  isResultPage: PropTypes.bool,
  bgColor: PropTypes.string,
  buttonText: PropTypes.string,
  color: PropTypes.string,
  handleSelectedBalance: PropTypes.func,
  selectedBalance: PropTypes.array,
};
export default BalanceBanner;
