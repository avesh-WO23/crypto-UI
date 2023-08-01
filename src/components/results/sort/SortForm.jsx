import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import FormActions from 'components/results/common/FormActions';

const sortBy = ['Total balance', 'Total Received', 'Total spent', 'Severity'];

const SortForm = ({ handleDrawer }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortType, setSortType] = useState(searchParams.get('sort') || '');

  //Submit the Form
  const handleSubmit = () => {
    searchParams.set('sort', sortType);
    setSearchParams(searchParams);
    handleDrawer('sort');
  };

  //Clear the Form
  const handleClear = () => {
    setSortType('');
    searchParams.delete('sort');
    setSearchParams(searchParams);
    handleDrawer('sort');
  };
  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} px={3} py={3}>
        <Typography variant="h6">Sort by</Typography>
        <CloseIcon onClick={() => handleDrawer('sort')} />
      </Box>
      <Box px={3} minHeight={200}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={sortType}
          name="radio-buttons-group"
        >
          <Grid container sx={{ rowGap: 2 }}>
            {sortBy.map((s, i) => (
              <Grid item xs={6} key={i}>
                <FormControlLabel
                  key={`${s}-${i}`}
                  value={s}
                  onChange={(e) => setSortType(e.target.value)}
                  control={<Radio size="small" />}
                  label={s}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </Box>
      <FormActions handleSubmit={handleSubmit} handleClear={handleClear} />
    </>
  );
};

export default SortForm;

SortForm.propTypes = {
  handleDrawer: PropTypes.func,
};
