import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';

import { Box, Grid } from '@mui/material';
import ItemImgCard from '../ui/ItemImgCard';
import ItemInfoCard from '../ui/ItemInfoCard';

const itemGridStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { xs: 'center', sm: 'flex-start' },
  alignItems: 'center',
  marginBottom: '50px',
};

const itemBoxStyles = {
  maxWidth: '280px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

function ProductsRenderer() {
  const displayedProducts = useSelector(
    (state) => state.products.displayedProducts
  );

  console.log('Products:', displayedProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {displayedProducts.map((item) => (
        <Grid
          item
          key={item.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={itemGridStyles}
        >
          <Box sx={itemBoxStyles}>
            <RouterLink to={`${item.id}`}>
              <ItemImgCard item={item} />
            </RouterLink>

            <RouterLink
              to={`${item.id}`}
              style={{ textDecoration: 'none', color: '#000' }}
            >
              <ItemInfoCard item={item} />
            </RouterLink>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductsRenderer;
