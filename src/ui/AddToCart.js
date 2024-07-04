import { Box, Button, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function AddToCart() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-Start',
        paddingTop: '30px',
        paddingBottom: '40px',
        gap: '30px',
      }}
    >
      <Box
        sx={{
          width: { xs: '25%', sm: '35%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid #000',
        }}
      >
        <Button
          disableRipple
          sx={{
            minWidth: '40px',
            height: '40px',
            padding: 0,
            color: '#000',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          <RemoveIcon fontSize='small' />
        </Button>

        <Typography
          sx={{
            fontSize: '18px',
            minWidth: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          1
        </Typography>

        <Button
          disableRipple
          sx={{
            minWidth: '40px',
            height: '40px',
            padding: 0,
            color: '#000',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          <AddIcon fontSize='small' color='#000' />
        </Button>
      </Box>

      <Box sx={{ width: { xs: '75%', sm: '65%' } }}>
        <Button
          disableRipple
          sx={{
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
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}

export default AddToCart;
