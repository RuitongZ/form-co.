import AccordionUsage from '../ui/AccordionUsage';

import contactImg from '../images/contact.jpg';

import { Box } from '@mui/material';

const bodyContainer = {
  paddingY: '70px',
  paddingX: { xs: 0, sm: '20px', md: '60px', lg: '80px' },
  backgroundColor: '#EEEAE2',
  display: 'flex',
  justifyContent: 'center',
  gap: '50px',
};

const imgBox = {
  width: '30%',
  display: { xs: 'none', sm: 'flex' },
  justifyContent: 'flex-end',
};

const imgStyles = {
  width: '55%',
  height: '75vh',
  objectFit: 'cover',
  border: '1px solid #000',
};

const accordionBox = {
  width: { xs: '85%', sm: '70%' },
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

function ContactInfo() {
  return (
    <Box sx={bodyContainer}>
      <Box sx={imgBox}>
        <Box component='img' src={contactImg} alt='table lamp' sx={imgStyles} />
      </Box>

      <Box sx={accordionBox}>
        <AccordionUsage />
      </Box>
    </Box>
  );
}

export default ContactInfo;
