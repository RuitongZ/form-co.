import React from 'react';
import { useState } from 'react';

import CustomButton from './CustomButton';
import dialogImg from '../images/objects/bgimg.jpeg';

import {
  Box,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
} from '@mui/material';

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

const dialogTextStyles = {
  fontSize: { xs: '14px', sm: '16px', md: '20px' },
  fontWeight: 300,
  wordSpacing: '3px',
  textAlign: 'center',
  color: '#fff',
  paddingX: '20px',
  marginBottom: '50px',
  zIndex: 1,
};

const dialogActionStyles = {
  marginTop: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
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

const formBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: { xs: 'center', md: 'flex-start' },
  width: '70%',
};

function EmailScribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleSubmit(Event) {
    Event.preventDefault();
    if (validateEmail(email)) {
      setError('');
      setOpen(true);
      console.log('Valid Email:', email);
    } else {
      setError('*Please enter a valid email address...');
    }
  }

  function handelClose() {
    setOpen(false);
    setEmail('');
  }

  return (
    <Box component='form' onSubmit={handleSubmit} sx={formBoxStyles}>
      <TextField
        variant='filled'
        id='email-input'
        label={error ? error : '*Please enter your email...'}
        type='emial'
        value={email}
        onChange={(Event) => setEmail(Event.target.value)}
        error={!!error}
        sx={{
          width: '100%',
          backgroundColor: 'transparent',
          marginBottom: '10px',
        }}
        InputProps={{
          style: {
            height: '50px',
            color: '#000',
            fontSize: '14px',
            backgroundColor: 'transparent',
          },
        }}
        InputLabelProps={{
          style: { color: '#A6A6A6', fontSize: '12px' },
        }}
      />
      <CustomButton
        type='submit'
        btnName='Subscribe'
        color='black'
        onClick={handleSubmit}
      />

      <Dialog
        open={open}
        onClose={handelClose}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundImage: `url(${dialogImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backdropFilter: 'blur(10px)',
            borderRadius: 0,
            border: '1px solid #000',
            width: '70%',
            height: { xs: '45%', sm: '50%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
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
        <DialogTitle sx={dialogTitleStyles}>Thank You!</DialogTitle>
        <Typography sx={dialogTextStyles}>
          Thank you for subscribing to our newsletter!
        </Typography>
        <DialogActions sx={dialogActionStyles}>
          <CustomButton btnName='Close' color='white' onClick={handelClose} />
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default EmailScribeForm;
