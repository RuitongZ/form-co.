import { categories } from '../data/categories';

import { Box, Grid, Typography } from '@mui/material';
import CategoryCard from '../ui/CategoryCard';

function Categories() {
  return (
    <Box
      sx={{
        backgroundColor: '#EEEAE2',
        paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
        paddingTop: '50px',
        paddingBottom: '100px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '50px',
        }}
      >
        <Typography sx={{ fontSize: '32px' }}>Categories</Typography>
      </Box>
      <Grid container columnSpacing={{ xs: 2, md: 4 }} spacing={2}>
        {categories.map((category) => (
          <Grid item xs={6} md={3} key={category.name}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Categories;
