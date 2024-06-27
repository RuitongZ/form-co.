import React from 'react';

import appointmentBg from '../images/flowerpot.png';

import DateTimePickerValue from '../ui/DateTimePicker';

import { Box, Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { styled } from '@mui/material/styles';

const BackgroundImage = styled(Box)({
  minWidth: '100%',
  minHeight: '65vh',
  backgroundImage: `url(${appointmentBg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
  top: 0,
});

function Booking() {
  return (
    <BackgroundImage>
      <Box
        sx={{
          width: '100%',
          height: '65vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(64, 43, 16, .5 )',
          paddingX: { xs: '80px', sm: '100px', md: '150px' },
          paddingY: '80px',
        }}
      >
        <PeopleOutlineIcon
          sx={{
            color: '#fff',
            width: { xs: '20px', sm: '30px', md: '40px', lg: '45px' },
            height: { xs: '20px', sm: '30px', md: '40px', lg: '45px' },
          }}
        />

        <Typography
          sx={{
            color: '#fff',
            fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '28px' },
            paddingBottom: '30px',
          }}
        >
          Book Appointment Now!!
        </Typography>

        <Typography
          sx={{
            color: '#fff',
            fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '16px' },
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Experience personalized service! Schedule an appointment to visit our
          store and enjoy a one-on-one consultation with our expert staff.
          Reserve your spot today for tailored advice and a seamless shopping
          experience.
        </Typography>

        <DateTimePickerValue />
      </Box>
    </BackgroundImage>
  );
}

export default Booking;
