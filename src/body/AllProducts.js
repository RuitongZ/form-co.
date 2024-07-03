import ProductsRenderer from '../components/ProductsRenderer';

import { Box, Typography } from '@mui/material';

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

function AllProducts(item) {
  return (
    <Box sx={bodyContainer}>
      <Box sx={bannerBox}>
        <Typography sx={{ fontSize: '24px' }}>Products</Typography>
        <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>
          Welcome to Form & Co., where every piece tells a story of design
          excellence and impeccable form.
        </Typography>
      </Box>

      <Box
        sx={{
          height: '70px',
          width: '100%',
          borderTop: '1px solid #000',
          borderBottom: '1px solid #000',
          marginBottom: '50px',
        }}
      >
        Filter
      </Box>

      <Box sx={productsBox}>
        <ProductsRenderer />
      </Box>
    </Box>
  );
}

export default AllProducts;
