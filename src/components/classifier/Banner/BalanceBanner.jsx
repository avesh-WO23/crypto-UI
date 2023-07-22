import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { Container } from "../../common/Container";
import SeverityButton from "../../common/buttons/SeverityButton";
import { SectionHeading } from "../../common/styled/SectionHeading";
import styles from "./styles.module.css";
import WalletIcon from "../../../assets/svg/wallet.svg";

const HeadingStyle = {
  fontWeight: 700,
  fontSize: "12px",
  color: "#5E6974",
  width: "100px",
};

const WalletText = styled(Typography)({
  fontSize: "14px",
  fontWeight: 700,
});

const WalletIconSpan = styled("span")({
  backgroundImage: `url(${WalletIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left bottom 2px",
  width: "30px",
  height: "30px",
});

const BalanceBanner = () => {
  return (
    <Container
      sx={{ backgroundImage: "linear-gradient(45deg, white 40% , #FF891A30);" }}
    >
      <div className={styles.walletHeading}>
        <div className={styles.walletIcon}>
          <WalletIconSpan />
          <WalletText variant="h2">WvzFY5rVKogxzRbWv</WalletText>
        </div>
        <SeverityButton text="Medium" bgColor="#FF891A" color="#000" />
      </div>
      <div className={styles.mainBalanceBox}>
        <div className={styles.totalBalance}>
          <SectionHeading variant="h4" sx={HeadingStyle}>
            Total Balance
          </SectionHeading>
          <Typography
            variant="h1"
            fontSize={28}
            fontWeight={700}
            paddingTop={"10px"}
          >
            802 $
          </Typography>
        </div>
        <div className={styles.totalRemains}>
          <div className={styles.remainingBalance}>
            <SectionHeading variant="h4" sx={HeadingStyle}>
              Total Spent
            </SectionHeading>
            <Typography variant="p" fontSize={"12px"} fontWeight={600}>
              600 $
            </Typography>
          </div>
          <div className={styles.remainingBalance}>
            <SectionHeading variant="h4" sx={HeadingStyle}>
              Total Received
            </SectionHeading>
            <Typography variant="p" fontSize={"12px"} fontWeight={600}>
              1050 $
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BalanceBanner;
