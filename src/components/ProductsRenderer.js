import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterCarouselProducts,
  filterProducts,
  shuffleProducts,
} from '../redux/productsSlice';
import { selectCategory } from '../redux/categoriesSlice';

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
  const dispatch = useDispatch();

  const shuffledProducts = useSelector(
    (state) => state.products.shuffledProducts
  );

  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  const carouselProducts = useSelector(
    (state) => state.products.carouselProducts
  );

  const products =
    filteredProducts.length > 0
      ? filteredProducts
      : carouselProducts.length > 0
      ? carouselProducts
      : shuffledProducts;

  console.log('filteredProducts', filteredProducts);
  console.log('carouselProducts', carouselProducts);
  console.log('shuffledProducts', shuffledProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {products.map((item) => (
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
