import { Box, Button, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function AddToCart() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '30px',
        paddingBottom: '40px',
        gap: '30px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #000',
          gap: '10px',
        }}
      >
        <Button
          disableRipple
          sx={{
            width: '50px',
            height: '50px',
            color: '#000',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          <RemoveIcon fontSize='small' />
        </Button>

        <Typography sx={{ fontSize: '18px' }}>1</Typography>

        <Button
          disableRipple
          sx={{
            width: '50px',
            height: '50px',
            color: '#000',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          <AddIcon fontSize='small' color='#000' />
        </Button>
      </Box>

      <Box>
        <Button
          disableRipple
          sx={{
            height: '50px',
            paddingX: '100px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 400,
            backgroundColor: '#000',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}

export default AddToCart;
