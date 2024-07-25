import { Link as RouterLink } from 'react-router-dom';

import { Button } from '@mui/material';

function CustomButton({ btnName, color, href, onClick }) {
  const isBlack = color === 'black';

  return (
    <Button
      disableRipple
      component={RouterLink}
      to={href}
      onClick={() => onClick(btnName)}
      sx={{
        flexGrow: 1,
        maxWidth: '200px',
        maxHeight: '50px',
        padding: '12px 40px ',
        border: `1px solid ${isBlack ? '#000' : '#fff'}`,
        borderRadius: '50px',
        color: isBlack ? '#000' : '#fff',
        backgroundColor: isBlack ? 'transparent' : '#000',
        textTransform: 'capitalize',
        fontSize: '12px',
        fontWeight: '400',
        ':hover': {
          color: isBlack ? '#fff' : '#000',
          backgroundColor: isBlack ? '#000' : '#fff',
          border: `${isBlack ? '1px solid transparent' : '1px solid #000'}`,
        },
      }}
    >
      {btnName}
    </Button>
  );
}

export default CustomButton;
