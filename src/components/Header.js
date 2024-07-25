import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  shuffleProducts,
  filterCarouselProducts,
  filterProducts,
} from '../redux/productsSlice';
import { selectCategory } from '../redux/categoriesSlice';
import { NavLink as RouterLink } from 'react-router-dom';

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
import CartDrawer from './CartDrawer';

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
  gap: '50px',
  paddingY: 0,
  minWidth: 0,
  color: '#000',
  fontSize: { sm: '10px', md: '12px', lg: '14px', xl: '16px' },
  textTransform: 'capitalize',
  textDecoration: 'none',
  fontWeight: '400',
  '&:hover': {
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

const iconSizes = {
  width: { xs: '20px', sm: '25px', md: '28px' },
  height: { xs: '20px', sm: '25px', md: '28px' },
};

const redQuantityIcon = {
  backgroundColor: 'red',
  borderRadius: '50px',
  width: { xs: '16px', md: '18px' },
  height: { xs: '16px', md: '18px' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: '-10px',
  right: '10px',
};

const pages = ['brands', 'products', 'about', 'contact'];

function Header() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [clickedPage, setClickedPage] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleClick = (page) => {
    if (page === 'products') {
      dispatch(shuffleProducts());
      dispatch(filterCarouselProducts({ category: 'reset' }));
      dispatch(filterProducts('reset'));
      dispatch(selectCategory('All Products'));
    }
    setClickedPage(page);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleCartDrawer = (newOpen) => () => {
    setCartOpen(newOpen);
  };

  const DrawerList = (
    <Box
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ p: '30px' }}>
        {pages.map((page) => (
          <ListItem key={page} sx={{ p: 0 }}>
            <ListItemButton
              disableRipple
              component={RouterLink}
              to={`${page}`}
              onClick={() => handleClick(page)}
              sx={{
                textTransform: 'capitalize',
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecorationLine: 'line-through',
                },

                textDecorationLine:
                  clickedPage === page ? 'line-through' : 'none',
              }}
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
                <MenuIcon sx={iconSizes} />
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
                <Typography
                  key={page}
                  component={RouterLink}
                  to={`${page}`}
                  onClick={() => handleClick(page)}
                  sx={{
                    ...meunBtnStyles,
                    fontWeight: clickedPage === page ? 600 : 400,
                  }}
                >
                  {page}
                </Typography>
              ))}
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: 0,
              }}
            >
              <Button
                disableRipple
                component={RouterLink}
                to={''}
                sx={logoBtnStyles}
              >
                <Typography
                  variant='h2'
                  sx={{
                    color: '#000',
                    fontSize: {
                      xs: '20px',
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
                <PersonIcon sx={iconSizes} />
              </IconButton>
              <IconButton disableRipple sx={iconButtonStyles}>
                <SearchIcon sx={iconSizes} />
              </IconButton>
              <IconButton
                disableRipple
                onClick={toggleCartDrawer(true)}
                sx={iconButtonStyles}
              >
                <ShoppingCartOutlinedIcon sx={iconSizes} />

                {totalQuantity > 0 ? (
                  <Box sx={redQuantityIcon}>
                    <Typography fontSize='10px' fontWeight={500} color='#fff'>
                      {totalQuantity}
                    </Typography>
                  </Box>
                ) : (
                  ''
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <CartDrawer open={cartOpen} onClose={toggleCartDrawer(false)} />
    </>
  );
}

export default Header;
