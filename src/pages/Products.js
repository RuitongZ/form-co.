import { useSelector } from 'react-redux';

import ProductsRenderer from '../components/ProductsRenderer';
import CustomPagination from '../ui/Pagination';

import { Box, Typography } from '@mui/material';
import ProductFilters from '../components/ProductFilters';

const bodyContainer = {
  paddingY: '100px',
  backgroundColor: '#EEEAE2',
};

const bannerBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  paddingBottom: '100px',
  gap: '10px',
};

const productsBox = {
  paddingX: { xs: '20px', sm: '50px', md: '60px', lg: '80px' },
};

function Products() {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  return (
    <Box sx={bodyContainer}>
      <Box sx={bannerBox}>
        <Typography sx={{ fontSize: '24px', textTransform: 'capitalize' }}>
          {selectedCategory}
        </Typography>
        <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>
          Welcome to Form & Co., where every piece tells a story of design
          excellence and impeccable form.
        </Typography>
      </Box>

      <Box sx={{ mb: '50px' }}>
        <ProductFilters />
      </Box>

      <Box sx={productsBox}>
        <ProductsRenderer />
      </Box>

      <CustomPagination />
    </Box>
  );
}

export default Products;
