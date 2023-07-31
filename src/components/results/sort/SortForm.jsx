import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import FormActions from 'components/results/common/FormActions';
import { filterActions } from 'store/filter-drawer/filterSlice';

const sortBy = ['Total balance', 'Total Received', 'Total spent', 'Severity'];

const SortForm = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortType, setSortType] = useState(searchParams.get('sort') || '');
  const { sort } = useSelector((state) => state.filterDrawer);

  //Submit the Form
  const handleSubmit = () => {
    searchParams.append('sort', sortType);
    setSearchParams(searchParams);
    dispatch(filterActions.toggleDrawer(sort ? 'sort' : 'filters'));
  };

  //Clear the Form
  const handleClear = () => {
    setSortType('');
    searchParams.delete('sort');
  };
  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} px={3} py={3}>
        <Typography variant="h6">Sort by</Typography>
        <CloseIcon
          onClick={() =>
            dispatch(filterActions.toggleDrawer(sort ? 'sort' : 'filters'))
          }
        />
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
