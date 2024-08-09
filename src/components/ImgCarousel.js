import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCarouselProducts, filterProducts } from '../redux/productsSlice';
import { selectCategory } from '../redux/categoriesSlice';
import { setClickedPage } from '../redux/pagesSlice';
import { Link as RouterLink } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography } from '@mui/material';

import ArrowButton from '../ui/ArrowButton';
import ItemImgCard from '../ui/ItemImgCard';
import ItemInfoCard from '../ui/ItemInfoCard';
import CustomButton from '../ui/CustomButton';

const containerStyles = {
  backgroundColor: '#EEEAE2',
  paddingX: { xs: '10px', md: '30px' },
  paddingY: '100px',
};

const titleBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '50px',
};

const carouselBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const responsiveStyles = {
  xl: {
    breakpoint: {
      max: 1920,
      min: 1536,
    },
    items: 4,
    partialVisibilityGutter: 30,
  },
  lg: {
    breakpoint: {
      max: 1536,
      min: 1380,
    },
    items: 4,
    partialVisibilityGutter: 30,
  },
  md: {
    breakpoint: {
      max: 1380,
      min: 1060,
    },
    items: 3,
    partialVisibilityGutter: 30,
  },
  sm: {
    breakpoint: {
      max: 1060,
      min: 750,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
  xs: {
    breakpoint: {
      max: 750,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

function ImgCarousel({ title, isFeatured = false, category = '' }) {
  const carouselRef = useRef(null);
  const dispatch = useDispatch();
  const carouselProducts = useSelector(
    (state) => state.products.carouselProducts
  );

  const handleClick = () => {
    if (category) {
      dispatch(selectCategory(category));
      dispatch(filterProducts(category));
      dispatch(setClickedPage('products'));
    }
    if (isFeatured === true) {
      dispatch(filterProducts('reset'));
      dispatch(selectCategory('featured'));
      dispatch(filterCarouselProducts({ isFeatured: true }));
      dispatch(setClickedPage('products'));
    }
  };

  useEffect(() => {
    dispatch(filterCarouselProducts({ isFeatured, category }));
  }, [dispatch, isFeatured, category]);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={titleBoxStyles}>
        <Typography
          sx={{ fontSize: { xs: '24px', sm: '26px', md: '28px', lg: '32px' } }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={carouselBoxStyles}>
        <ArrowButton direction='left' onClick={handlePrevious} />

        <Box
          sx={{
            flex: 1,
            overflow: 'hidden',
          }}
        >
          <Carousel
            ref={carouselRef}
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=''
            containerClass='container'
            customLeftArrow={<></>}
            customRightArrow={<></>}
            dotListClass=''
            draggable
            focusOnSelect={false}
            infinite
            itemClass=''
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            renderDotsOutside={false}
            responsive={responsiveStyles}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=''
            slidesToSlide={1}
            swipeable
          >
            {carouselProducts.map((product) => (
              <Box
                key={product.id}
                sx={{
                  overflow: 'hidden',
                  maxWidth: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
              >
                <RouterLink to={`/products/${product.id}`}>
                  <ItemImgCard item={product} />
                </RouterLink>
                <RouterLink
                  to={`/products/${product.id}`}
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <ItemInfoCard item={product} />
                </RouterLink>
              </Box>
            ))}
          </Carousel>
        </Box>
        <ArrowButton direction='right' onClick={handleNext} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '50px',
        }}
      >
        <CustomButton
          btnName='View all'
          color='white'
          href={`/products`}
          onClick={handleClick}
        />
      </Box>
    </Box>
  );
}

export default ImgCarousel;
