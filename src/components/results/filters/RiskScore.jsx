import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';

import SeverityLabel from '../../common/buttons/SeverityLabel';
import { Container } from '../../common/Container';

const RiskOptions = styled(Box)({ paddingTop: '20px' });

const Options = [
  { text: 'Severe', bgColor: '#A7081E', color: '#fff' },
  { text: 'Medium', bgColor: '#FF891A', color: '#000' },
  { text: 'High', bgColor: '#D30813', color: '#fff' },
  { text: 'Low', bgColor: '#BDC3C8', color: '#000' },
];

const RiskScore = ({ filterForm, setFilterForm }) => {
  const handleChange = (score) => (event) => {
    setFilterForm((prev) => {
      const newState = { ...prev };
      if (prev.riskScores.includes(score)) {
        newState.riskScores = newState.riskScores.filter((r) => r !== score);
      } else {
        newState.riskScores = [...newState.riskScores, score];
      }
      return newState;
    });
  };
  return (
    <Container sx={{ px: 3, py: 3 }}>
      <Typography variant="h6">Risk Score</Typography>
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
                <Checkbox
                  sx={{ padding: 0 }}
                  onChange={handleChange(opt.text)}
                  checked={
                    filterForm.riskScores.includes(opt.text) ? true : false
                  }
                />
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

RiskScore.propTypes = {
  filterForm: PropTypes.object,
  setFilterForm: PropTypes.func,
};

export default RiskScore;
