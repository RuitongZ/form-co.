import { useState } from 'react';

import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

import AddressForm from './AddressForm';
import BillingAddressCheckBox from './BillingAddressCheckBox';

import AMEX from '../images/payment-icons/amex.svg';
import VISA from '../images/payment-icons/visa.svg';
import INTERAC from '../images/payment-icons/interac.svg';
import MASTERCARD from '../images/payment-icons/mastercard.svg';
import PAYPAL from '../images/payment-icons/paypal-logo-png.png';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 0,
      fontSize: '14px',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid #000',
      borderRadius: 0,
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '14px',
    '&.Mui-focused': {
      color: '#000',
    },
  },
});

const displayStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
};

const paymentFormBox = {
  border: '1px solid #00000038',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const radioAndLogos = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const radioCheckStyles = {
  color: '#000',
  '&.Mui-checked': {
    color: '#000',
  },
};

function CheckoutForm() {
  const [paymentMethod, setPatmentMethod] = useState('credit-card');

  const handlePaymentChange = (event) => {
    setPatmentMethod(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography fontWeight={600}>Contact:</Typography>
      <CustomTextField
        id='email'
        label='Email address'
        variant='outlined'
        fullWidth
      />

      <Typography fontWeight={600}>Shipping Address:</Typography>
      <AddressForm />

      <Typography fontWeight={600}>Payment:</Typography>
      <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
        <Box sx={paymentFormBox}>
          <Box sx={radioAndLogos}>
            <FormControlLabel
              value='credit-card'
              control={
                <Radio disableRipple size='small' sx={radioCheckStyles} />
              }
              label='Credit card'
            />

            <div>
              <Box component='img' src={VISA} alt='visa' />
              <Box component='img' src={MASTERCARD} alt='mastercard' />
              <Box component='img' src={INTERAC} alt='interac' />
              <Box component='img' src={AMEX} alt='amex' />
            </div>
          </Box>

          {paymentMethod === 'credit-card' && (
            <>
              <CustomTextField
                id='name-on-card'
                label='Name on card'
                variant='outlined'
                fullWidth
              />
              <CustomTextField
                id='card-number'
                label='Card number'
                variant='outlined'
                fullWidth
              />

              <Box sx={displayStyles}>
                <CustomTextField
                  id='expiration-date'
                  label='Expiration date'
                  variant='outlined'
                  fullWidth
                />

                <CustomTextField
                  id='security-code'
                  label='Security code'
                  variant='outlined'
                  fullWidth
                />
              </Box>

              <BillingAddressCheckBox />
            </>
          )}

          <Box sx={radioAndLogos}>
            <FormControlLabel
              value='paypal'
              control={
                <Radio disableRipple size='small' sx={radioCheckStyles} />
              }
              label='Paypal'
            />

            <div>
              <Box
                component='img'
                src={PAYPAL}
                alt='paypal'
                sx={{ width: '80px' }}
              />
            </div>
          </Box>
        </Box>
      </RadioGroup>
    </Box>
  );
}

export default CheckoutForm;
