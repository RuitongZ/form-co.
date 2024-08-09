import { Box, Button, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const buttonStyles = {
  padding: 0,
  minWidth: 0,
  color: '#000',
  '&:hover': { backgroundColor: 'transparent' },
};

function IncreDecreBtn({ quantity, onIncrement, onDecrement }) {
  return (
    <Box sx={containerStyles}>
      <Button disableRipple onClick={onDecrement} sx={buttonStyles}>
        <RemoveIcon fontSize='small' color='#000' />
      </Button>

      <Typography fontSize='14px' fontWeight={600}>
        {quantity}
      </Typography>

      <Button disableRipple onClick={onIncrement} sx={buttonStyles}>
        <AddIcon fontSize='small' color='#000' />
      </Button>
    </Box>
  );
}

export default IncreDecreBtn;
