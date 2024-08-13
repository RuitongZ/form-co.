import {
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
  Box,
  Button,
} from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import CustomButton from '../ui/CustomButton';

import ThankCardImg from '../images/thank-card-img.jpg';

const clearBtnBox = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  pt: '10px',
  pr: '10px',
  pb: '30px',
};

const clearBtnStyles = {
  minWidth: 0,
  padding: '1px',
  color: '#fff',
  '&:hover': {
    color: '#fff',
  },
};

const overlayStyles = {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 0,
};

const dialogTitleStyles = {
  fontFamily: 'Brogadier',
  textTransform: 'uppercase',
  color: '#fff',
  fontSize: {
    xs: '35px',
    sm: '40px',
    md: '45px',
    lg: '50px',
    xl: '55px',
  },
  zIndex: 1,
  position: 'relative',
};

const dialogTextBox = {
  color: '#fff',
  paddingX: '20px',
  marginBottom: '50px',
  zIndex: 1,
};

const textStyles = {
  fontSize: { xs: '16px', sm: '16px', md: '20px' },
  fontWeight: 300,
  wordSpacing: '3px',
  textAlign: 'center',
};

const dialogActionStyles = {
  marginTop: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

function ThanksCardDialog({ open, onClose, onClick }) {
  return (
    <Dialog
      open={open}
      PaperProps={{
        elevation: 0,
        sx: {
          backgroundImage: `url(${ThankCardImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backdropFilter: 'blur(10px)',
          borderRadius: 0,
          border: '1px solid #000',
          width: { xs: '80%', sm: '70%' },
          height: { xs: '55%', sm: '50%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '::before': overlayStyles,
        },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(238, 234, 226,0.9)',
          },
        },
      }}
    >
      <Box sx={clearBtnBox}>
        <Button disableRipple onClick={onClose} sx={clearBtnStyles}>
          <ClearIcon fontSize='small' />
        </Button>
      </Box>

      <DialogTitle sx={dialogTitleStyles}>Thank You!</DialogTitle>
      <Box sx={dialogTextBox}>
        <Typography sx={textStyles}>
          Thank you for shopping at FORM & CO.
        </Typography>
        <Typography sx={textStyles}>We hope you enjoy your orders!</Typography>
      </Box>
      <DialogActions sx={dialogActionStyles}>
        <CustomButton
          btnName='Continue Shopping'
          color='white'
          onClick={onClick}
          href={'/'}
        />
      </DialogActions>
    </Dialog>
  );
}

export default ThanksCardDialog;
