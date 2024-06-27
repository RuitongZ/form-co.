import about1 from '../images/lighting/Formakami-JH5-2.png';
import about2 from '../images/tables/Rotate-Table-SC73-1.jpeg';
import about3 from '../images/Lounge-Chair.jpeg';

import { Box, Typography } from '@mui/material';

const bodyContainer = {
  paddingY: '50px',
  paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
};

const wrapBox = {
  display: 'flex',
  border: '1px solid #000',
};

const textBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingX: { xs: '30px', sm: '50px', md: '80px' },
  paddingY: { xs: '50px', sm: '70px', md: '90px' },
};

const titleStyles = {
  textTransform: 'uppercase',
  fontSize: { xs: '24px', sm: '30px', md: '40px', lg: '60px' },
};

const textStyles = {
  fontSize: { xs: '10px', sm: '12px', md: '14px' },
};

function AboutUsInfo() {
  return (
    <Box sx={bodyContainer}>
      <Box sx={wrapBox}>
        <Box
          component='img'
          src={about1}
          alt='dinning room setting'
          sx={{
            width: '50%',
            objectFit: 'cover',
            borderRight: '1px solid #000',
          }}
        />
        <Box sx={textBox}>
          <Typography variant='h2' sx={titleStyles}>
            About Us
          </Typography>
          <Typography variant='body1' sx={textStyles}>
            We celebrate modern sophistication and craftsmanship, providing
            timeless pieces that enhance your space and inspire creativity.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ ...wrapBox, borderTop: 'none' }}>
        <Box sx={textBox}>
          <Typography
            variant='body1'
            sx={{
              ...textStyles,
              '&::first-letter': {
                fontSize: { xs: '20px', md: '28px' },
                lineHeight: '1.1',
              },
            }}
          >
            At Form & Co., we are passionate about the transformative power of
            exceptional design. Our brand is dedicated to curating a
            distinguished collection of designer furniture that embodies the
            perfect marriage of form and function. We believe that furniture is
            more than just functional; it is an expression of artistry,
            innovation, and timeless elegance.
          </Typography>
          <Typography
            variant='body1'
            sx={{ ...textStyles, paddingTop: '15px' }}
          >
            Our curated selection features iconic pieces from world-renowned
            designers, each chosen for its unique ability to blend aesthetics
            with practicality. From striking silhouettes and elegant contours to
            innovative shapes and materials, our collection reflects a
            commitment to quality and sophistication. Every item we offer is
            crafted to not only enhance the beauty of your space but also to
            inspire a sense of creativity and well-being in your everyday life.
          </Typography>
        </Box>
        <Box
          component='img'
          src={about2}
          alt='side table and lamp'
          sx={{
            width: '30%',
            objectFit: 'cover',
            borderLeft: '1px solid #000',
          }}
        />
      </Box>

      <Box sx={{ ...wrapBox, borderTop: 'none' }}>
        <Box
          component='img'
          src={about3}
          alt='dinning room setting'
          sx={{
            width: '40%',
            objectFit: 'cover',
            borderLeft: '1px solid #000',
            transform: 'scaleX(-1)',
          }}
        />
        <Box sx={textBox}>
          <Typography
            variant='body1'
            sx={{
              ...textStyles,
              '&::first-letter': {
                fontSize: { xs: '20px', md: '28px' },
                lineHeight: '1.1',
              },
            }}
          >
            At Form & Co., we understand that great design transcends trends.
            It’s about creating environments that resonate with individuality
            and style. Our mission is to provide you with furniture that speaks
            to your personal taste while delivering unparalleled comfort and
            durability. We are dedicated to bringing you timeless designs that
            will stand the test of time, offering both visual appeal and
            functional excellence.
          </Typography>
          <Typography
            variant='body1'
            sx={{ ...textStyles, paddingTop: '15px' }}
          >
            Discover the essence of modern living with Form & Co.. Whether you
            are furnishing a new home, updating your current decor, or seeking a
            statement piece to complete your interior, our collection promises
            to elevate your space with elegance and thoughtful design. Welcome
            to a world where form meets perfection, and every piece tells a
            story of design excellence.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUsInfo;
