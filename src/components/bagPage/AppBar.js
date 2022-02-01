import * as React from 'react';
import logo from '../../images/logo_purple_eng.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const pages = ['Members', 'Courses', 'Contact', 'En', 'Ru'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent:"flex-end",}} >

        {/* DESKTOP LOGO */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{cursor: 'pointer', width:'80px', height:'80px', ml:2,  display: { xs: 'none', md: 'flex' } }}
          >
             <img  src={logo} alt="logo" />
          </Typography>
        
          {/* DESKTOP MENU ITEMS */}
          <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                sx={{ 
                width: 'auto',   
                minWidth:'initial',            
                backgroundColor:'transparent', 
                color:'#302a42', 
                fontFamily: 'JournalSansNew',
                fontSize:'19px',
                fontWeight: '40',
                whiteSpace:'nowrap',
                border:'none',
                pl:2.7,
                pr:0,                 
                letterSpacing:'initial',
                '&:hover': {
                  background:'none'
                }
              }}
                key={page}
                onClick={handleCloseNavMenu}
                variant="text"
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>        
          <Box sx={{justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
            <IconButton onClick={handleOpenUserMenu} >
              <YouTubeIcon/>
            </IconButton>
            <IconButton onClick={handleOpenUserMenu} >
              <InstagramIcon/>
            </IconButton>
          </Box>
          {/* HAMBURGER ICON */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}                            
            >
              <MenuIcon />
            </IconButton>
            {/* MOBILE MENU ITEMS */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
