import AddToCart from '../ui/AddToCart';
import InfoTabs from '../ui/InfoTabs';

import { Box, Typography } from '@mui/material';

import one from '../images/lighting/Flowerpot-VP9-mustard.png';
import two from '../images/lighting/Flowerpot-VP9-mustard-1.png';

const bodyContainer = {
  paddingY: '50px',
  paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
  display: 'flex',
};

function ProductDetailRenderer() {
  return (
    <Box sx={bodyContainer}>
      <Box sx={{ width: '53%', display: 'flex', gap: '10px' }}>
        <Box
          sx={{
            width: '20%',
            paddingX: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            paddingLeft: '35px',
          }}
        >
          <Box
            component='img'
            src={one}
            alt='one'
            sx={{
              width: '100%',
              border: '1px solid #000',
              backgroundColor: '#fff',
            }}
          />
          <Box
            component='img'
            src={two}
            alt='two'
            sx={{ width: '100%', border: '1px solid #000' }}
          />
        </Box>
        <Box sx={{ width: '80%' }}>
          <Box
            component='img'
            src={one}
            alt='one'
            sx={{
              width: '100%',
              border: '1px solid #000',
              backgroundColor: '#fff',
            }}
          />
        </Box>
      </Box>

      {/* InfoBox */}
      <Box
        sx={{
          width: '47%',
          paddingLeft: '60px',
          paddingRight: '35px',
          paddingY: '10px',
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid #000',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 300 }}>
            &Tradition
          </Typography>
          <Box>
            <Typography
              sx={{ fontSize: '22px', fontWeight: 500, letterSpacing: '1px' }}
            >
              Flowerpot VP9 Portable Table Lamp
            </Typography>
            <Typography sx={{ fontSize: '22px', fontWeight: 300 }}>
              - Mustard
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Cera Pro',
                fontSize: '24px',
                letterSpacing: '1px',
                color: '#898989',
                display: 'flex',
                justifyContent: 'flex-end',
                paddingY: '20px',
              }}
            >
              C$374.95
            </Typography>
          </Box>
        </Box>

        <Box>
          <AddToCart />
        </Box>

        <Box>
          <InfoTabs />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetailRenderer;
