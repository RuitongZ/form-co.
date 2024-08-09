import { Link } from 'react-router-dom';

import { Box, Typography, Button } from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import IncreDecreBtn from '../ui/IncreDecreBtn';

const cartContainer = {
  py: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '20px',
};

const productImageStyles = {
  minWidth: '100px',
  height: '100px',
  objectFit: 'cover',
  border: '1px solid #000',
  backgroundColor: '#fff',
  cursor: 'pointer',
};

const cartInfoBox = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100px',
};

const productNameStyles = {
  display: 'flex',
  alignItems: 'flex-start',
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

const quantityAndPrice = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const emptyBox = {
  display: 'flex',
  justifyContent: 'center',
  py: '50px',
  gap: '10px',
};

function XsCart({
  cartItems,
  onClick,
  onDecrement,
  onIncrement,
  formattedItemPrice,
  onClose,
}) {
  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Box key={item.id} sx={cartContainer}>
            <Link to={`/products/${item.id}`} onClick={onClose}>
              <Box
                component='img'
                src={item.img[0]}
                alt={item.name}
                sx={productImageStyles}
              />
            </Link>

            <Box sx={cartInfoBox}>
              <Box sx={productNameStyles}>
                <div>
                  <Typography fontWeight={600} fontSize='13px'>
                    {item.name}
                  </Typography>
                  <Typography fontSize='12px'>- {item.color}</Typography>
                </div>

                <Button
                  disableRipple
                  onClick={() => onClick(item.id)}
                  sx={clearBtnStyles}
                >
                  <ClearIcon fontSize='xs' />
                </Button>
              </Box>

              <Box sx={quantityAndPrice}>
                <IncreDecreBtn
                  quantity={item.quantity}
                  onDecrement={() =>
                    onDecrement(
                      item.id,
                      item.quantity > 0 ? item.quantity - 1 : 0
                    )
                  }
                  onIncrement={() => onIncrement(item.id, item.quantity + 1)}
                />
                <Typography fontSize='14px' fontWeight={600}>
                  {formattedItemPrice(item.price, item.quantity)}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Box sx={emptyBox}>
          <Typography fontSize='14px' color='grey'>
            Your cart is empty. Please add items to it!
          </Typography>
        </Box>
      )}
    </>
  );
}

export default XsCart;
