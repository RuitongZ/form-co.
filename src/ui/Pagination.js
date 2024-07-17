import { Box, Stack, Pagination } from '@mui/material';

function CustomPagination() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={2}>
        <Pagination
          count={5}
          variant='outlined'
          size='large'
          sx={{
            '.MuiPaginationItem-root': {
              fontFamily: 'Poppins',
              '&.Mui-selected': {
                border: '1px solid #000',
                backgroundColor: '#000',
                color: '#fff',
              },
            },
          }}
        />
      </Stack>
    </Box>
  );
}

export default CustomPagination;
