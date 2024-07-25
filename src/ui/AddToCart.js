import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';

import { Box, Button } from '@mui/material';

import CartDrawer from '../components/CartDrawer';
import AddAndRomoveBtn from './AddAndRemoveBtn';

const containerStyles = {
  display: 'flex',
  justifyContent: 'flex-Start',
  paddingTop: '30px',
  paddingBottom: '40px',
  gap: '30px',
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

function AddToCart({ item }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addItemToCart({ ...item, quantity }));
      toggleDrawer(true)();
    }
  };

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <Box sx={containerStyles}>
      <AddAndRomoveBtn
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      <Box sx={{ width: { xs: '75%', sm: '65%' } }}>
        <Button
          disableRipple
          onClick={handleAddToCart}
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
