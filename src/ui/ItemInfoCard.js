import { Box, Typography } from '@mui/material';

function ItemInfoCard({ item }) {
  return (
    <Box
      key={item.id}
      sx={{
        maxWidth: { xs: '250px', sm: '280px' },
        marginTop: '10px',
        paddingLeft: '10px',
        borderLeft: '1px solid #000',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box key={item.id}>
        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
          {item.brand}
        </Typography>
        <Typography sx={{ fontSize: '14px' }}>{item.name}</Typography>
        <Typography sx={{ fontSize: '12px' }}>{item.color[0]}</Typography>
      </Box>
      <Box key={item.id}>
        <Typography
          sx={{
            fontSize: '14px',
            fontFamily: 'Cera Pro',
            fontWeight: 'medium',
            color: '#898989',
          }}
        >
          {item.price[0]}
        </Typography>
      </Box>
    </Box>
  );
}

export default ItemInfoCard;
