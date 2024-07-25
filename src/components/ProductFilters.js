import { useState } from 'react';

import FilterDrawerList from './FilterDrawerList';

import { Drawer, Box, Typography } from '@mui/material';
import SortByList from './SortByList';

const filterSectionBox = {
  height: '50px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingX: { xs: '20px', sm: '30px', md: '60px', lg: '95px' },
  borderTop: '1px solid #000',
  borderBottom: '1px solid #000',
};

const textStyles = {
  height: '50px',
  paddingX: '30px',
  display: 'flex',
  alignItems: 'center',
  borderLeft: '1px solid #000',
  borderRight: '1px solid #000',
  cursor: 'pointer',
};

function ProductFilters() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const toggleFilterDrawer = (newOpen) => () => {
    setOpenFilter(newOpen);
  };

  const toggleSortDrawer = (newOpen) => () => {
    setOpenSort(newOpen);
  };

  return (
    <>
      <Box sx={filterSectionBox}>
        <Box onClick={toggleFilterDrawer(true)} sx={textStyles}>
          <Typography fontWeight={500}>Filter</Typography>
        </Box>
        <Box onClick={toggleSortDrawer(true)} sx={textStyles}>
          <Typography fontWeight={500}>Sort By</Typography>
        </Box>
      </Box>

      <Drawer
        anchor='left'
        open={openFilter}
        onClose={toggleFilterDrawer(false)}
      >
        <FilterDrawerList
          onClick={() => toggleFilterDrawer()}
          onKeyDown={() => toggleFilterDrawer()}
        />
      </Drawer>
      <Drawer anchor='right' open={openSort} onClose={toggleSortDrawer(false)}>
        <SortByList
          onClick={() => toggleSortDrawer()}
          onKeyDown={() => toggleSortDrawer()}
        />
      </Drawer>
    </>
  );
}

export default ProductFilters;
