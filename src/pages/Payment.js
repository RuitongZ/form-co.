import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { setClickedPage } from '../redux/pagesSlice';

import { Box, Typography, Button } from '@mui/material';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';
import ThanksCardDialog from '../components/ThanksCardDialog';

const bodyContainer = {
  pt: '50px',
  pb: '100px',
  px: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
  display: 'flex',
  flexDirection: 'column',
};

const titleStyles = {
  pb: '50px',
  display: 'flex',
  justifyContent: 'center',
};

const CheckoutFormBox = {
  display: 'flex',
  flexDirection: { xs: 'column-reverse', md: 'row' },
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '50px',
};

const payNowButton = {
  mt: '20px',
  backgroundColor: '#000',
  color: '#fff',
  height: '50px',
  '&:hover': {
    backgroundColor: 'transparent',
    border: '1px solid #000',
    color: '#000',
  },
};

const orderSummayBox = {
  width: { xs: '100%', lg: '40%' },
  border: '1px solid #000',
};

function Payment() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(true);
  };

  const handelClose = () => {
    setOpen(false);
    dispatch(clearCart());
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const handleClickContinue = () => {
    setOpen(false);
    dispatch(clearCart());
    dispatch(setClickedPage(null));
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box sx={bodyContainer}>
      <Box sx={titleStyles}>
        <Typography fontSize='24px' fontWeight={600}>
          Checkout
        </Typography>
      </Box>

      <Box sx={CheckoutFormBox}>
        <Box sx={{ width: { xs: '100%', lg: '60%' } }}>
          <CheckoutForm />

          <Button
            fullWidth
            disableRipple
            type='submit'
            onClick={handleSubmit}
            sx={payNowButton}
          >
            Pay Now
          </Button>
        </Box>

        <ThanksCardDialog
          open={open}
          onClose={handelClose}
          onClick={handleClickContinue}
        />

        <Box sx={orderSummayBox}>
          <OrderSummary />
        </Box>
      </Box>
    </Box>
  );
}

export default Payment;
