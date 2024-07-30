import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../redux/cartSlice';

import { Box, Grid, Typography } from '@mui/material';
import IncreDecreBtn from '../ui/IncreDecreBtn';
import CustomButton from '../ui/CustomButton';
import XsCart from '../components/XsCart';

const bodyContainer = {
  pt: '50px',
  pb: '100px',
  px: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
  display: 'flex',
  flexDirection: 'column',
};

const containerGrid1 = {
  borderBottom: '1px solid #000',
  pb: '10px',
};

const containerGrid2 = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const itemTypeGrid = {
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: '0 !important',
};

const itemInfoGrid = {
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: '0 !important',
};

const imgAndNameGrid = {
  display: 'flex',
  gap: '20px',
  paddingLeft: '0 !important',
};

const imgStyles = {
  minWidth: '100px',
  height: '100px',
  objectFit: 'cover',
  border: '1px solid #000',
  backgroundColor: '#fff',
  cursor: 'pointer',
};

const itemNameStyles = {
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity }));
    if (quantity === 0) {
      dispatch(removeItemFromCart(id));
    }
  };

  const subtotalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const formattedSubtotalPrice = formatCurrency(subtotalPrice);

  const estimatedTax = subtotalPrice * 0.13;
  const formattedEsimatedTax = formatCurrency(estimatedTax);

  const totalPrice = subtotalPrice + estimatedTax;
  const formattedTotalPrice = formatCurrency(totalPrice);

  return (
    <Box sx={bodyContainer}>
      <Box sx={{ pb: '50px', display: 'flex', justifyContent: 'center' }}>
        <Typography fontSize='24px' fontWeight={600}>
          Shopping Cart
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: '50px',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', lg: '70%' },
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
          }}
        >
          <Grid container spacing={4} m={0} width='100%' sx={containerGrid1}>
            <Grid
              item
              xs={6}
              sx={{ display: 'flex', justifyItems: 'flex-start' }}
            >
              <Typography fontSize='14px'>Item</Typography>
            </Grid>
            <Grid item xs={2} sx={itemTypeGrid}>
              <Typography fontSize='14px'>Quantity</Typography>
            </Grid>
            <Grid item xs={2} sx={itemTypeGrid}>
              <Typography fontSize='14px'>Item Price</Typography>
            </Grid>
            <Grid item xs={2} sx={itemTypeGrid}>
              <Typography fontSize='14px'>Subtotal</Typography>
            </Grid>
          </Grid>

          {/* ITEMS INFO */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Grid
                container
                spacing={4}
                m={0}
                width='100%'
                sx={containerGrid2}
              >
                <Grid item xs={6} sx={imgAndNameGrid}>
                  <Box
                    component='img'
                    src={item.img[0]}
                    alt={item.name}
                    sx={imgStyles}
                  />

                  <Box sx={itemNameStyles}>
                    <Typography fontWeight={600} fontSize='14px'>
                      {item.name}
                    </Typography>
                    <Typography fontSize='14px'>- {item.color}</Typography>
                  </Box>
                </Grid>

                <Grid item xs={2} sx={itemInfoGrid}>
                  <Box
                    sx={{
                      border: '1px solid #000',
                      padding: '5px',
                      width: '90px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <IncreDecreBtn
                      quantity={item.quantity}
                      onDecrement={() =>
                        handleUpdateQuantity(
                          item.id,
                          item.quantity > 0 ? item.quantity - 1 : 0
                        )
                      }
                      onIncrement={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                    />
                  </Box>
                </Grid>

                <Grid item xs={2} sx={itemInfoGrid}>
                  <Typography fontSize='14px' fontWeight={600}>
                    {formattedItemPrice(item.price, 1)}
                  </Typography>
                </Grid>

                <Grid item xs={2} sx={itemInfoGrid}>
                  <Typography fontSize='14px' fontWeight={600}>
                    {formattedItemPrice(item.price, item.quantity)}
                  </Typography>
                </Grid>
              </Grid>
            ))
          ) : (
            <Box>
              <Typography fontSize='14px' sx={{ py: '30px' }}>
                Your cart is empty. Please add items to it!
              </Typography>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'column',
            borderTop: '1px solid #000',
            pt: '15px',
          }}
        >
          <XsCart
            cartItems={cartItems}
            onClick={handleRemoveItem}
            onIncrement={handleUpdateQuantity}
            onDecrement={handleUpdateQuantity}
            formattedItemPrice={formattedItemPrice}
          />
        </Box>

        {/* TOTAL FORM */}
        <Box
          sx={{
            height: { xs: 'none', lg: '55vh' },
            width: { xs: '100%', lg: '30%' },
            border: '1px solid #000',
            px: '32px',
            py: '50px',
            mt: { xs: 0, lg: '32px' },
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography fontSize='14px'>Subtotal:</Typography>
            <Typography fontWeight={600}>{formattedSubtotalPrice}</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography fontSize='14px'>Shipping:</Typography>
            <Typography fontWeight={600}>Free</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography fontSize='14px'>Estimated Tax:</Typography>
            <Typography fontWeight={600}>{formattedEsimatedTax}</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid #000',
              pt: '10px',
            }}
          >
            <Typography fontSize='14px'>Total:</Typography>
            <Typography fontWeight={600}>{formattedTotalPrice}</Typography>
          </Box>

          <Box
            sx={{
              pt: '50px',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <CustomButton btnName='Checkout' color='white' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
