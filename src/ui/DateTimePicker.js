import React from 'react';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box, TextField, Typography } from '@mui/material';

export default function DateTimePickerValue({ onClose }) {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '16px' },
            color: '#fff',
            paddingBottom: '10px',
          }}
        >
          Pick your date
        </Typography>
        <DateTimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          textField={(params) => <TextField {...params} />}
          sx={{
            width: { xs: '70%', lg: '50%' },
            '.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff',
                borderRadius: '50px',
              },
              '&:hover fieldset': {
                borderColor: '#fff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff',
              },
              input: {
                color: '#fff',
                paddingLeft: '30px',
              },
              '.MuiIconButton-root': {
                color: '#fff',
                marginRight: '5px',
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
