import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/productsSlice';

import { Box, Stack, Pagination } from '@mui/material';

function CustomPagination() {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.products.currentPage);

  const itemsPerPage = useSelector((state) => state.products.itemsPerPage);

  const totalProducts = useSelector(
    (state) =>
      state.products.filteredProducts.length ||
      state.products.carouselProducts.length ||
      state.products.shuffledProducts.length
  );

  const pageCount = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (event, value) => {
    dispatch(setCurrentPage(value));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          variant='outlined'
          size='large'
          sx={{
            '.MuiPaginationItem-root': {
              fontFamily: 'Poppins',
              '&.Mui-selected': {
                border: '1px solid #000',
                backgroundColor: '#000',
                color: '#fff',
              },
            },
          }}
        />
      </Stack>
    </Box>
  );
}

export default CustomPagination;
