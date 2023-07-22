import { Checkbox, Typography, styled } from "@mui/material";
import React from "react";
import WalletIcon from "../../../assets/svg/wallet.svg";
import { Container } from "../../common/Container";
import SeverityButton from "../../common/buttons/SeverityButton";
import { SectionHeading } from "../../common/styled/SectionHeading";
import styles from "./styles.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

const BalanceBanner = ({
  bgColor,
  color,
  isResultPage = false,
  buttonText,
  generateReport,
}) => {
  return (
    <Container
      sx={{
        backgroundImage: `linear-gradient(45deg, white 40% , ${bgColor}30);`,
        padding: "16px 16px",
        border: isResultPage ? `1px solid ${bgColor}30` : "none",
        position: isResultPage ? "relative" : "static",
        boxShadow: isResultPage ? "0 4px 12px #00000012" : "",
        borderRadius: isResultPage ? "8px" : "",
      }}
    >
      <div className={styles.walletHeading}>
        <div className={styles.walletIcon}>
          {isResultPage && (
            <Checkbox
              sx={{ padding: "0 16px 0 0" }}
              onChange={generateReport}
            />
          )}
          <WalletIconSpan />
          <WalletText variant="h2">WvzFY5rVKogxzRbWv</WalletText>
        </div>
        <SeverityButton text={buttonText} bgColor={bgColor} color={color} />
      </div>
      <div className={styles.mainBalanceBox}>
        <div
          className={styles.totalBalance}
          style={{ borderRight: !isResultPage ? "1px solid #adb9bf" : "none" }}
        >
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
        {!isResultPage ? (
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
        ) : (
          <span className={styles.arrowIcon}>
            <ArrowForwardIcon />
          </span>
        )}
      </div>
    </Container>
  );
};

export default BalanceBanner;
