import { Box, Button, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const addAndRemoveBoxStyles = {
  width: { xs: '50%', sm: '35%' },
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

function AddAndRomoveBtn({ quantity, onIncrement, onDecrement }) {
  return (
    <Box sx={addAndRemoveBoxStyles}>
      <Button disableRipple sx={addAndRemoveButtonStyles} onClick={onDecrement}>
        <RemoveIcon fontSize='small' />
      </Button>

      <Typography sx={numberStyles}>{quantity}</Typography>

      <Button disableRipple sx={addAndRemoveButtonStyles} onClick={onIncrement}>
        <AddIcon fontSize='small' color='#000' />
      </Button>
    </Box>
  );
}

export default AddAndRomoveBtn;
