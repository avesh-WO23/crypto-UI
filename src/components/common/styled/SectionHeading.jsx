import { Typography, styled } from "@mui/material";

const Heading = styled(Typography)({
  fontSize: "16px",
  fontWeight: 600,
  color: "#121E28",
});

export const SectionHeading = ({ children, variant, sx, ...props }) => {
  return (
    <Heading sx={sx} variant={variant} {...props}>
      {children}
    </Heading>
  );
};
