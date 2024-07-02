import { FOOTER_MENUS } from '../data/footerMenu';

import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TiktokIcon from '../images/tik-tok-icon.png';
import EmailScribeForm from '../ui/EmailSubscribeForm';

const footerContainer = {
  paddingY: '50px',
  paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
  borderTop: '1px solid #000',
};

const upperContainer = {
  display: 'flex',
  flexDirection: { xs: 'column-reverse', md: 'row' },
  justifyContent: { xs: 'none', md: 'space-between' },
  alignItems: { xs: 'center', md: 'flex-start' },
  marginBottom: '100px',
};

const menuWrapBox = {
  display: 'flex',
  justifyContent: { xs: 'center', md: 'flex-start' },
  width: { xs: '100%', md: '70%' },
};

const subscribeBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { xs: 'center', md: 'flex-end' },
  alignItems: { xs: 'center', md: 'flex-start' },
  width: { xs: '100%', md: 'auto' },
  paddingTop: '5px',
  paddingRight: { xs: '20px', md: '0px' },
  paddingLeft: { xs: '20px', md: '20px' },
  marginBottom: { xs: '50px', md: 0 },
};

const menu1Box = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingRight: { xs: '30px', sm: '50px', md: '50px' },
  paddingY: '5px',
  paddingLeft: { xs: '30px', sm: '30px', md: '0' },
};

const menu2Box = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingX: { xs: '30px', sm: '50px', md: '50px' },
  paddingY: '5px',
  borderRight: '1px solid #000',
  borderLeft: '1px solid #000',
};

const menu3Box = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingX: { xs: '30px', sm: '50px', md: '50px' },
  paddingY: '5px',
};

const textStyles = {
  fontSize: { xs: '12px', md: '14px' },
  paddingY: '3px',
  cursor: 'pointer',
};

function Footer() {
  return (
    <Box sx={footerContainer}>
      <Box sx={upperContainer}>
        <Box sx={menuWrapBox}>
          <Box sx={menu1Box}>
            {FOOTER_MENUS[0].map((menu) => (
              <Typography key={menu} sx={textStyles}>
                {menu}
              </Typography>
            ))}
          </Box>

          <Box sx={menu2Box}>
            {FOOTER_MENUS[1].map((menu) => (
              <Typography key={menu} sx={textStyles}>
                {menu}
              </Typography>
            ))}
          </Box>

          <Box sx={menu3Box}>
            <Typography sx={textStyles}>Follow Us</Typography>
            <Box
              sx={{
                display: 'flex',
                marginBottom: '25px',
                gap: '15px',
                cursor: 'pointer',
              }}
            >
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
              <Box
                component='img'
                src={TiktokIcon}
                alt='Tiktok Icon'
                sx={{ width: '25px' }}
              />
            </Box>
            <Typography sx={textStyles}>Tel: +1-423-757-9040</Typography>
            <Typography sx={textStyles}>Email: info@form&co.ca</Typography>
          </Box>
        </Box>

        <Box sx={subscribeBox}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography
              sx={{
                ...textStyles,
                textAlign: { xs: 'center', md: 'start' },
                lineHeight: '28px',
              }}
            >
              Sign up for our newsletter and get the latest updates, news and
              product offers via email.
            </Typography>
          </Box>
          <EmailScribeForm />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ fontSize: '12px' }}>
          Copyright &#169; Form & Co.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
