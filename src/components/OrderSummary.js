import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectEstimatedTax,
  selectSubtotalPrice,
  selectTotalPrice,
} from '../redux/cartSlice';

import { Box, Typography } from '@mui/material';
import { formatCurrency } from '../utils/priceUtils';

const summaryContainer = {
  p: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const itemSummaryBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const itemInfoBox = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const productImageStyles = {
  minWidth: '60px',
  height: '60px',
  objectFit: 'cover',
  border: '1px solid #000',
  backgroundColor: '#fff',
};

const textBoxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
};

function OrderSummary() {
  const cartItems = useSelector(selectCartItems);
  const subtotalPrice = useSelector(selectSubtotalPrice);
  const estimatedTax = useSelector(selectEstimatedTax);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <Box sx={summaryContainer}>
      <Typography fontSize='16px' fontWeight={600} sx>
        Order summary:
      </Typography>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Box key={item.id} sx={itemSummaryBox}>
            <Box sx={itemInfoBox}>
              <Box
                component='img'
                src={item.img[0]}
                alt={item.name}
                sx={productImageStyles}
              />

              <Box sx={{ pr: '10px' }}>
                <Typography fontSize='12px'>{item.name} </Typography>
                <Typography fontSize='12px'> - {item.color}</Typography>
              </Box>

              <Typography>× {item.quantity}</Typography>
            </Box>

            <Typography fontSize='14px'>
              {formatCurrency(item.price * item.quantity)}
            </Typography>
          </Box>
        ))
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography fontSize='14px' sx={{ py: '30px' }}>
            Your cart is empty.
          </Typography>
        </Box>
      )}

      <Box sx={{ borderTop: '1px solid #000', pt: '10px' }}>
        <Box sx={textBoxStyles}>
          <Typography fontSize='14px'>Subtotal:</Typography>
          <Typography fontSize='14px'>{subtotalPrice}</Typography>
        </Box>

        <Box sx={textBoxStyles}>
          <Typography fontSize='14px'>Shipping:</Typography>
          <Typography fontSize='14px'>Free</Typography>
        </Box>

        <Box sx={textBoxStyles}>
          <Typography fontSize='14px'>Estimated Tax:</Typography>
          <Typography fontSize='14px'>{estimatedTax}</Typography>
        </Box>

        <Box sx={textBoxStyles}>
          <Typography fontSize='18px' fontWeight={600}>
            Total:
          </Typography>
          <Typography fontSize='18px' fontWeight={600}>
            {totalPrice}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderSummary;
