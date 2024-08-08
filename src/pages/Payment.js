import { Box, Typography, Button } from '@mui/material';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';

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

function Payment() {
  return (
    <Box sx={bodyContainer}>
      <Box sx={titleStyles}>
        <Typography fontSize='24px' fontWeight={600}>
          Checkout
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '50px',
        }}
      >
        <Box sx={{ width: { xs: '100%', lg: '60%' } }}>
          <CheckoutForm />

          <Button fullWidth disableRipple sx={payNowButton}>
            Pay Now
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', lg: '40%' },
            border: '1px solid #000',
          }}
        >
          <OrderSummary />
        </Box>
      </Box>
    </Box>
  );
}

export default Payment;
