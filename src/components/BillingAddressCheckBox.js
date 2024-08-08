import { useState } from 'react';

import { FormControlLabel, Checkbox } from '@mui/material';
import AddressForm from './AddressForm';

function BillingAddressCheckBox() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            disableRipple
            defaultChecked
            size='small'
            checked={checked}
            onChange={handleChange}
            sx={{
              color: '#000',
              '&.Mui-checked': {
                color: '#000',
              },
            }}
          />
        }
        label='Use shipping address as billing address'
        sx={{
          '& .MuiFormControlLabel-label': {
            fontSize: '14px',
            color: '#0000008f',
          },
        }}
      />

      {!checked && <AddressForm />}
    </>
  );
}

export default BillingAddressCheckBox;
