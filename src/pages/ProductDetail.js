import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setProduct } from '../redux/productsSlice';

import { Box, Typography } from '@mui/material';
import ImgCarousel from '../components/ImgCarousel';
import ProductDetailRenderer from '../components/ProductDetailRenderer';

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(setProduct(productId));

    window.scrollTo(0, 0);
  }, [dispatch, productId]);

  if (!product) {
    return (
      <Box
        sx={{
          paddingY: '100px',
          paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
          backgroundColor: '#EEEAE2',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <Typography> Sorry! This product could not found.</Typography>
      </Box>
    );
  }
  return (
    <>
      <ProductDetailRenderer product={product} />
      <ImgCarousel title='Related Products' category={product.category} />
    </>
  );
}

export default ProductDetail;
