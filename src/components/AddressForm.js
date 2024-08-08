import { Box, TextField } from '@mui/material';
import styled from 'styled-components';

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

function AddressForm() {
  return (
    <>
      <Box sx={displayStyles}>
        <CustomTextField
          id='first-name'
          label='First name'
          variant='outlined'
          fullWidth
        />

        <CustomTextField
          id='last-name'
          label='Last name'
          variant='outlined'
          fullWidth
        />
      </Box>

      <CustomTextField
        id='address'
        label='Address'
        variant='outlined'
        fullWidth
      />

      <CustomTextField
        id='unit'
        label='Appartment, unit, etc. (optional)'
        variant='outlined'
        fullWidth
      />

      <Box sx={displayStyles}>
        <CustomTextField id='city' label='City' variant='outlined' fullWidth />

        <CustomTextField
          id='province'
          label='Province'
          variant='outlined'
          fullWidth
        />

        <CustomTextField
          id='postal-code'
          label='Postal code'
          variant='outlined'
          fullWidth
        />
      </Box>

      <Box sx={displayStyles}>
        <CustomTextField
          id='countty'
          label='Country'
          variant='outlined'
          fullWidth
        />

        <CustomTextField
          id='phone-number'
          label='Phone number'
          variant='outlined'
          fullWidth
        />
      </Box>
    </>
  );
}

export default AddressForm;
