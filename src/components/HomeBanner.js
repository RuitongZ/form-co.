import { useDispatch } from 'react-redux';
import {
  filterCarouselProducts,
  filterProducts,
  shuffleProducts,
} from '../redux/productsSlice';
import { selectCategory } from '../redux/categoriesSlice';

import topBanner from '../images/top-banner.png';

import CustomButton from '../ui/CustomButton';

import { Box, Typography } from '@mui/material';
import { setClickedPage } from '../redux/pagesSlice';

const homeBannerStyles = {
  paddingY: '50px',
  paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
};

const borderBoxStyles = {
  display: 'flex',
  flexDirection: {
    xs: 'column',
    sm: 'column',
    md: 'row',
  },
  border: '1px solid',
};

const bannerImgStyles = {
  width: { xs: '100%', sm: '100%', md: '60%' },
  maxHeight: { xs: '400px', md: '550px' },
  objectFit: 'cover',
  borderRight: { xs: 'none', md: '1px solid #000' },
  borderBottom: { xs: '1px solid #000', md: 'none' },
};

function HomeBanner() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(filterCarouselProducts({ category: 'reset' }));
    dispatch(filterProducts('reset'));
    dispatch(shuffleProducts());
    dispatch(selectCategory('All Products'));
    dispatch(setClickedPage('products'));
  };

  return (
    <Box sx={homeBannerStyles}>
      <Box sx={borderBoxStyles}>
        <Box
          component='img'
          src={topBanner}
          alt='interior display'
          sx={bannerImgStyles}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            width: { xs: '100%', sm: '100%', md: '40%' },
            padding: '40px',
          }}
        >
          <Box sx={{ paddingBottom: '40px' }}>
            <Typography
              sx={{
                fontSize: { xs: '12px', md: '13px' },
                textAlign: { xs: 'center', md: 'start' },
              }}
            >
              <strong>Form & Co.</strong> offers a curated collection of iconic
              designer furniture that blends aesthetics and functionality. We
              celebrate modern sophistication and craftsmanship, providing
              timeless pieces that enhance your space and inspire creativity.
              Discover the beauty of impeccable form and thoughtful design with
              us.
            </Typography>
          </Box>
          <Box>
            <CustomButton
              btnName='shop all'
              color='white'
              href={'products'}
              onClick={handleClick}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeBanner;
