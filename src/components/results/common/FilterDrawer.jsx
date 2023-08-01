import Box from '@mui/material/Box';
import { PropTypes } from 'prop-types';

import Drawer from 'components/common/Drawer';
import FilterForm from 'components/results/filters/FilterForm';
import SortForm from 'components/results/sort/SortForm';

export default function FilterDrawer({ drawer, handleDrawer }) {
  const { sort, filters } = drawer;

  return (
    <Drawer
      open={sort || filters}
      toggleDrawer={() => handleDrawer(sort ? 'sort' : 'filters')}
      maxHeight={'95%'}
    >
      <Box role="presentation">
        {filters && <FilterForm drawer={drawer} handleDrawer={handleDrawer} />}
        {sort && <SortForm drawer={drawer} handleDrawer={handleDrawer} />}
      </Box>
    </Drawer>
  );
}

FilterDrawer.propTypes = {
  drawer: PropTypes.object,
  handleDrawer: PropTypes.func,
};
