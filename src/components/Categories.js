import { useSelector } from 'react-redux';

import { Box, Grid, Typography } from '@mui/material';
import CategoryCard from '../ui/CategoryCard';

const sectionContainer = {
  backgroundColor: '#EEEAE2',
  paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  paddingTop: '50px',
  paddingBottom: '100px',
};

const titleBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '50px',
};

function Categories() {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <Box sx={sectionContainer}>
      <Box sx={titleBoxStyles}>
        <Typography sx={{ fontSize: '32px' }}>Categories</Typography>
      </Box>
      <Grid container columnSpacing={{ xs: 2, md: 4 }} spacing={2}>
        {categories.map((category) => (
          <Grid item xs={6} md={3} key={category.category}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Categories;
