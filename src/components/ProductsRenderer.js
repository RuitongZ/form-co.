import { useState, useEffect } from 'react';

import { All_PRODUCTS_DATA } from '../data/all-products-data';

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

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function ProductsRenderer() {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(All_PRODUCTS_DATA);
    setShuffledProducts(shuffled);
  }, []);

  return (
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {shuffledProducts.map((item) => (
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
            <ItemImgCard item={item} />
            <ItemInfoCard item={item} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductsRenderer;
