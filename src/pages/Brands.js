import { useDispatch } from 'react-redux';
import { filterProducts } from '../redux/productsSlice';
import { selectCategory } from '../redux/categoriesSlice';
import { setClickedPage } from '../redux/pagesSlice';

import { BRAND_INTRODUCTION } from '../data/brand-introduction';
import { Box, Typography } from '@mui/material';
import { Link, NavLink as RouterLink } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';

const bodyContainer = {
  paddingY: '50px',
  paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
};

const brandBox = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
  pb: '50px',
  borderBottom: '1px solid #000',
  gap: { xs: '30px', sm: 0 },
};

const imgStyles = {
  maxHeight: { xs: '200px', sm: '250px', md: 'none' },
  minWidth: { xs: '100%', sm: '100%', md: 'none' },
  maxWidth: { xs: 'none', sm: 'none', md: '300px' },
  border: '1px solid #000',
  objectFit: 'cover',
  mb: { xs: 0, sm: '30px', md: 0 },
};

const introStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  pl: { xs: '20px', sm: '20px', md: '50px' },
  pr: { xs: '20px', sm: '20px', md: '30px' },
};

const brandNameStyles = {
  mb: '30px',
  cursor: 'pointer',
  color: '#000',
  textDecoration: 'none',
};

const introductionStyles = {
  fontSize: { xs: '12px', sm: '12px', md: '14px' },
  mb: '10px',
};

function Brands() {
  const dispatch = useDispatch();

  const handleFilterClick = (value) => {
    dispatch(filterProducts(value));
    dispatch(selectCategory(value));
    dispatch(setClickedPage('products'));
  };

  return (
    <>
      <Box sx={bodyContainer}>
        {BRAND_INTRODUCTION.map((brand, index) => (
          <Box key={index} sx={brandBox}>
            <Link
              to={'/products'}
              onClick={() => handleFilterClick(brand.brand)}
            >
              <Box
                component='img'
                src={brand.img}
                alt={brand.brand}
                sx={imgStyles}
              />
            </Link>

            <Box sx={introStyles}>
              <Typography
                fontSize='20px'
                fontWeight={600}
                component={RouterLink}
                to={'/products'}
                onClick={() => handleFilterClick(brand.brand)}
                sx={brandNameStyles}
              >
                {brand.brand}
              </Typography>

              {brand.introduction.split('\n').map((paragraph, i) => (
                <Typography key={i} sx={introductionStyles}>
                  {paragraph}
                </Typography>
              ))}

              <Box sx={{ mt: '30px' }}>
                <CustomButton
                  btnName='View Products'
                  color='black'
                  onClick={() => handleFilterClick(brand.brand)}
                  href={'/products'}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Brands;
