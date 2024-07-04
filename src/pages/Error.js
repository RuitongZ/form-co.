import Footer from '../components/Footer';
import Header from '../components/Header';
import ErrorIcon from '../images/error.png';

import { Box, Typography } from '@mui/material';

const boxStyles = {
  paddingY: '100px',
  paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
};

function ErrorPage() {
  return (
    <>
      <Header />
      <Box sx={boxStyles}>
        <Box
          component='img'
          src={ErrorIcon}
          alt='error icon'
          sx={{ width: '40px' }}
        />
        <Typography fontSize='20px'>
          Sorry! The page you were looking for was not found.
        </Typography>
      </Box>
      <Footer />
    </>
  );
}

export default ErrorPage;
