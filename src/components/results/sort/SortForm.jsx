import CloseIcon from '@mui/icons-material/Close';
import { Box, FormControlLabel, Grid, Radio, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import FormActions from 'components/results/common/FormActions';
import { filterActions } from 'store/filter-drawer/filterSlice';

const sortBy = ['Total balance', 'Total Received', 'Total spent', 'Severity'];

const SortForm = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filterDrawer);
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
        <Grid container sx={{ rowGap: 2 }}>
          {sortBy.map((s, i) => (
            <Grid item xs={6} key={i}>
              <FormControlLabel
                key={`${s}-${i}`}
                value="female"
                control={<Radio size="small" />}
                label={s}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <FormActions />
    </>
  );
};

export default SortForm;
