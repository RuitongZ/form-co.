import { useRef } from 'react';

import { All_PRODUCTS_DATA } from '../data/all-products-data';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography } from '@mui/material';

import ArrowButton from '../ui/ArrowButton';
import ItemImgCard from '../ui/ItemImgCard';
import ItemInfoCard from '../ui/ItemInfoCard';
import CustomButton from '../ui/CustomButton';

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

function ImgCarousel({ title }) {
  const carouselRef = useRef(null);

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
    <Box
      sx={{
        backgroundColor: '#EEEAE2',
        paddingX: { xs: '10px', md: '30px' },
        paddingY: '100px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '50px',
        }}
      >
        <Typography sx={{ fontSize: '32px' }}>{title}</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
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
            {All_PRODUCTS_DATA.map((item) => (
              <Box
                key={item.id}
                sx={{
                  overflow: 'hidden',
                  maxWidth: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
              >
                <ItemImgCard item={item} />
                <ItemInfoCard item={item} />
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
        <CustomButton btnName='View all' color='black' />
      </Box>
    </Box>
  );
}

export default ImgCarousel;
