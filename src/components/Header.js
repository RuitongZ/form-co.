import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  AppBar,
  Grid,
  Toolbar,
  Button,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemButton,
  Drawer,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';

const appBarStyles = {
  height: { sm: '70px', md: '90px' },
  backgroundColor: '#EEEAE2',
  borderBottom: '1px solid #000',
  position: 'static',
  display: 'flex',
  justifyContent: 'flex-end',
};

const toolBarStyles = {
  maxwidth: '100%',
  alignItems: 'flex-end',
};

const containerGridStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  paddingX: { xs: '20px', sm: '30px', md: '60px', lg: '95px' },
  paddingBottom: '10px',
  marginLeft: 0,
  '& > .MuiGrid-item': { pl: 0 },
};

const meunBtnStyles = {
  paddingLeft: 0,
  // paddingRight: '50px',
  gap: '50px',
  paddingY: 0,
  minWidth: 0,
  ':hover': {
    backgroundColor: 'transparent',
  },
};

const menuTextStyles = {
  color: '#000',
  fontSize: { sm: '10px', md: '12px', lg: '13px', xl: '16px' },
  textTransform: 'capitalize',
  fontWeight: '400',
  ':hover': {
    fontWeight: '600',
  },
};

const logoBtnStyles = {
  ':hover': {
    backgroundColor: 'transparent',
  },
  padding: 0,
};

const iconButtonStyles = {
  color: '#000',
  padding: 0,
  paddingLeft: { xs: '10px', sm: '20px', md: '30px' },
};

const pages = ['Designers', 'Products', 'About', 'Contact'];

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page}>
            <ListItemButton
              disableRipple
              component={RouterLink}
              to={`/${page}`}
            >
              {page}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar elevation={0} sx={appBarStyles}>
        <Toolbar disableGutters sx={toolBarStyles}>
          <Grid container columnSpacing={3} sx={containerGridStyles}>
            <Grid
              item
              xs={4}
              sx={{
                display: { xs: 'flex', sm: 'flex', md: 'none' },
              }}
            >
              <IconButton
                disableRipple
                size='large'
                aria-label='hamberger menu'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={toggleDrawer(true)}
                sx={{ padding: 0, color: '#000' }}
              >
                <MenuIcon fontSize='large' />
              </IconButton>
              <Drawer
                anchor='left'
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    display: { xs: 'flex', sm: 'flex', md: 'none' },
                    minWidth: { xs: '40%', sm: '30%' },
                  },
                }}
              >
                {DrawerList}
              </Drawer>
            </Grid>

            <Grid
              item
              columnGap={3}
              md={4}
              sx={{
                display: { xs: 'none', sm: 'none', md: 'flex' },
                justifyContent: 'flex-start',
                pl: 0,
              }}
            >
              {pages.map((page) => (
                <Button
                  disableRipple
                  key={page}
                  component={RouterLink}
                  to={`/${page}`}
                  sx={meunBtnStyles}
                >
                  <Typography sx={menuTextStyles}>{page}</Typography>
                </Button>
              ))}
            </Grid>

            <Grid
              item
              xs={4}
              sx={{ display: 'flex', justifyContent: 'center', paddingLeft: 0 }}
            >
              <Button
                disableRipple
                component={RouterLink}
                to={'/'}
                sx={logoBtnStyles}
              >
                <Typography
                  variant='h2'
                  sx={{
                    color: '#000',
                    fontSize: {
                      xs: '24px',
                      sm: '30px',
                      md: '30px',
                      lg: '36px',
                      xl: '40px',
                    },
                  }}
                >
                  Form & Co.
                </Typography>
              </Button>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingLeft: 0,
              }}
            >
              <IconButton disableRipple sx={iconButtonStyles}>
                <PersonIcon fontSize='medium' />
              </IconButton>
              <IconButton disableRipple sx={iconButtonStyles}>
                <SearchIcon fontSize='medium' />
              </IconButton>
              <IconButton disableRipple sx={iconButtonStyles}>
                <ShoppingCartOutlinedIcon fontSize='medium' />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
