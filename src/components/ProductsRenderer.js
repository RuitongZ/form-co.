import { products } from '../data/products';

import { Box, Grid } from '@mui/material';
import ItemImgCard from '../ui/ItemImgCard';
import ItemInfoCard from '../ui/ItemInfoCard';

function ProductsRenderer() {
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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'center', sm: 'flex-start' },
            alignItems: 'center',
            marginBottom: '50px',
          }}
        >
          <Box
            sx={{
              maxWidth: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <ItemImgCard item={item} />
            <ItemInfoCard item={item} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductsRenderer;
