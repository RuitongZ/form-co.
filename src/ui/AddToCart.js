import { useReducer, useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CartDrawer from '../components/CartDrawer';

const containerStyles = {
  display: 'flex',
  justifyContent: 'flex-Start',
  paddingTop: '30px',
  paddingBottom: '40px',
  gap: '30px',
};

const addAndRemoveBoxStyles = {
  width: { xs: '25%', sm: '35%' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid #000',
};

const addAndRemoveButtonStyles = {
  minWidth: '40px',
  height: '40px',
  padding: 0,
  color: '#000',
  '&:hover': { backgroundColor: 'transparent' },
};

const numberStyles = {
  fontSize: '18px',
  minWidth: '20px',
  display: 'flex',
  justifyContent: 'center',
};

const addToCartButtonStyles = {
  height: '50px',
  width: '100%',
  margin: '0 auto',
  color: '#fff',
  fontSize: '16px',
  textTransform: 'capitalize',
  fontWeight: 400,
  backgroundColor: '#000',
  borderRadius: 0,
  '&:hover': { backgroundColor: '#2E2E2E' },
};

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      quantity: state.quantity + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      quantity: state.quantity > 0 ? state.quantity - 1 : 0,
    };
  }
};

function AddToCart() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [state, dispatch] = useReducer(reducer, { quantity: 0 });

  return (
    <Box sx={containerStyles}>
      <Box sx={addAndRemoveBoxStyles}>
        <Button
          disableRipple
          sx={addAndRemoveButtonStyles}
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          <RemoveIcon fontSize='small' />
        </Button>

        <Typography sx={numberStyles}>{state.quantity}</Typography>

        <Button
          disableRipple
          sx={addAndRemoveButtonStyles}
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          <AddIcon fontSize='small' color='#000' />
        </Button>
      </Box>

      <Box sx={{ width: { xs: '75%', sm: '65%' } }}>
        <Button
          disableRipple
          onClick={toggleDrawer(true)}
          sx={addToCartButtonStyles}
        >
          Add to cart
        </Button>

        <CartDrawer open={open} onClose={toggleDrawer(false)} />
      </Box>
    </Box>
  );
}

export default AddToCart;
