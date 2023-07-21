import { Box, styled } from "@mui/material";

const MainContainer = styled(Box)({
  padding: "24px 16px",
});

export const Container = ({ children, sx, ...props }) => {
  return (
    <MainContainer sx={sx} {...props}>
      {children}
    </MainContainer>
  );
};
