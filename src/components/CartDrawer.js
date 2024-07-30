import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../redux/cartSlice';

import { Drawer, Box, Typography, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import IncreDecreBtn from '../ui/IncreDecreBtn';
import CustomButton from '../ui/CustomButton';
import XsCart from './XsCart';

const box1 = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #000',
  px: '30px',
  pt: '15px',
  pb: '10px',
};

const box3 = {
  backgroundColor: '#fff',
  position: 'fixed',
  bottom: 0,
  right: 0,
  width: { xs: '80%', sm: '60%', md: '40%', lg: '30%' },
};

const freeShippingSlogan = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  px: '30px',
  py: '15px',
  gap: '8px',
  backgroundColor: '#EEEAE2',
};

const closeDrawerBtn = {
  minWidth: 0,
  padding: 0,
  color: '#000',
  '&:hover': {
    backgroundColor: 'transparent',
  },
};

const cartInfoBox = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100px',
};

const emptyBox = {
  display: 'flex',
  justifyContent: 'center',
  py: '50px',
  gap: '10px',
};

const productNameStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
};

const quantityAndPrice = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const clearBtnStyles = {
  minWidth: 0,
  padding: '1px',
  color: '#fff',
  backgroundColor: '#000',
  borderRadius: '50px',
  '&:hover': { backgroundColor: '#000', borderRadius: '50px' },
};

const productImageStyles = {
  minWidth: '100px',
  height: '100px',
  objectFit: 'cover',
  border: '1px solid #000',
  backgroundColor: '#fff',
  cursor: 'pointer',
};

const subtotalBox = {
  paddingX: '30px',
  paddingY: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
};

const checkoutBox = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '15px',
  paddingX: '28px',
  paddingY: '20px',
  borderTop: '1px solid #000',
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

const formattedItemPrice = (price, quantity) =>
  formatCurrency(price * quantity);

function CartDrawer({ open, onClose }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity }));
    if (quantity === 0) {
      dispatch(removeItemFromCart(id));
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = formatCurrency(totalPrice);

  const DrawerList = (
    <Box role='presentation' onKeyDown={onClose}>
      <Box sx={box1}>
        <Typography>Your Cart:</Typography>
        <Button disableRipple onClick={onClose} sx={closeDrawerBtn}>
          <NavigateNextIcon />
        </Button>
      </Box>

      <Box sx={freeShippingSlogan}>
        <SentimentSatisfiedAltIcon fontSize='small' />
        <Typography fontSize='14px'>
          Enjoy Free Shipping for every order!
        </Typography>
      </Box>

      <Box sx={{ px: '20px' }}>
        <XsCart
          cartItems={cartItems}
          onClick={handleRemoveItem}
          onIncrement={handleUpdateQuantity}
          onDecrement={handleUpdateQuantity}
          formattedItemPrice={formattedItemPrice}
        />
      </Box>

      {/* CHECK OUT */}
      <Box sx={box3}>
        <Box sx={subtotalBox}>
          <Typography>Subtotal:</Typography>
          <Typography fontWeight={500}>{formattedTotalPrice}</Typography>
        </Box>

        <Box sx={checkoutBox}>
          <CustomButton
            href={'/cart'}
            onClick={onClose}
            btnName='view cart'
            color='white'
          />
          <CustomButton
            href={'/cart'}
            onClick={onClose}
            btnName='checkout'
            color='white'
          />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'flex',
          width: { xs: '80%', sm: '60%', md: '40%', lg: '30%' },
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}

export default CartDrawer;
