import React from 'react';

import { Box, Grid, styled, Checkbox } from '@mui/material';

import SeverityLabel from '../../common/buttons/SeverityLabel';
import { Container } from '../../common/Container';
import { SectionHeading } from '../../common/styled/SectionHeading';

const RiskOptions = styled(Box)({ paddingTop: '20px' });

const Options = [
  { text: 'Severe', bgColor: '#A7081E', color: '#fff' },
  { text: 'Medium', bgColor: '#FF891A', color: '#000' },
  { text: 'High', bgColor: '#D30813', color: '#fff' },
  { text: 'Low', bgColor: '#BDC3C8', color: '#000' },
];

const RiskScore = () => {
  return (
    <Container sx={{ px: 3, py: 3 }}>
      <SectionHeading>Risk Score</SectionHeading>
      <RiskOptions>
        <Grid container rowGap={4}>
          {Options.map((opt, i) => {
            return (
              <Grid
                item
                xs={6}
                display={'flex'}
                alignItems={'center'}
                gap={1}
                key={`${opt.text}-${i}`}
              >
                <Checkbox sx={{ padding: 0 }} />
                <SeverityLabel
                  bgColor={opt.bgColor}
                  color={opt.color}
                  text={opt.text}
                />
              </Grid>
            );
          })}
        </Grid>
      </RiskOptions>
    </Container>
  );
};

export default RiskScore;
