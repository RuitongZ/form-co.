import { useEffect, useState } from 'react';

import AddToCart from '../ui/AddToCart';
import InfoTabs from '../ui/InfoTabs';
import ServicePoint from '../ui/ServicePoint';

import { Box, Typography } from '@mui/material';

const bodyContainer = {
  paddingTop: '50px',
  paddingBottom: '20px',
  paddingX: { xs: '40px', sm: '50px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: { xs: '30px', md: 0 },
};

const imageBoxStyles = {
  width: { xs: '100%', md: '53%' },
  display: 'flex',
  gap: '20px',
};

const tabImageBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const tabImageStyles = {
  width: { xs: '50px', sm: '80px', md: '70px', lg: '80px' },
  objectFit: 'cover',
  border: '1px solid #000',
  backgroundColor: '#fff',
  cursor: 'pointer',
};

const mainImageStyles = {
  width: '100%',
  height: { xs: '75vh', sm: '100vh', md: '90vh', lg: '100vh' },
  border: '1px solid #000',
  backgroundColor: '#fff',
  objectFit: 'cover',
};

const infoBoxContainer = {
  width: { xs: '100%', md: '47%' },
  paddingLeft: { xs: 0, md: '40px', lg: '60px' },
  paddingY: '10px',
};

const productInfoBox = {
  borderBottom: '1px solid #000',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const productPriceStyles = {
  fontFamily: 'Cera Pro',
  fontSize: { xs: '24px', sm: '24px', md: '22px', lg: '24px' },
  letterSpacing: '1px',
  color: '#898989',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingY: '20px',
};

const formatCurrency = (value) => {
  return (
    'C' +
    new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumIntegerDigits: 2,
    }).format(value)
  );
};

const formattedItemPrice = (price) => formatCurrency(price);

function ProductDetailRenderer({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.img[0]);

  useEffect(() => {
    setSelectedImage(product.img[0]);
  }, [product]);

  return (
    <Box sx={bodyContainer} key={product.id}>
      <Box sx={imageBoxStyles}>
        <Box sx={tabImageBoxStyles}>
          {product.img.map((img, index) => (
            <Box
              key={index}
              component='img'
              src={img}
              alt={`image-${index}`}
              onClick={() => setSelectedImage(img)}
              sx={tabImageStyles}
            />
          ))}
        </Box>
        <Box sx={{ width: '100%' }}>
          <Box
            component='img'
            src={selectedImage}
            alt={product.name}
            sx={mainImageStyles}
          />
        </Box>
      </Box>

      {/* InfoBox */}
      <Box sx={infoBoxContainer}>
        <Box sx={productInfoBox}>
          <Typography
            sx={{
              fontSize: { xs: '18px', sm: '18px', md: '16px', lg: '18px' },
              fontWeight: 300,
            }}
          >
            {product.brand}
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '22px', sm: '22px', md: '20px', lg: '22px' },
                fontWeight: 300,
              }}
            >
              <Typography
                component='span'
                sx={{
                  fontSize: { xs: '22px', sm: '22px', md: '20px', lg: '22px' },
                  fontWeight: 500,
                }}
              >
                {product.name}
              </Typography>
              {' - '}
              {product.color}
            </Typography>
            {product.designer ? (
              <Typography> Designer: {product.designer}</Typography>
            ) : undefined}

            <Box>
              <Typography sx={productPriceStyles}>
                {formattedItemPrice(product.price)}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <AddToCart item={product} />
        </Box>

        <Box sx={{ mb: '50px' }}>
          <InfoTabs item={product} />
        </Box>

        <ServicePoint />
      </Box>
    </Box>
  );
}

export default ProductDetailRenderer;
