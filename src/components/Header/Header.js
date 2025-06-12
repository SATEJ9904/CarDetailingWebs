import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
  Avatar,
  Badge
} from '@mui/material';
import { 
  LocalCarWash, 
  Menu as MenuIcon, 
  Phone, 
} from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/images/Logo.png';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const mobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClick = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          backgroundColor: 'rgba(0, 20, 40, 0.95)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 30, 60, 0.98)'
          }
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo Section */}
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mr: 2,
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <Avatar 
                src={logo} 
                alt="Metallic Logo" 
                variant="square"
                sx={{ 
                  width: { xs: 100, md: 120 }, 
                  height: { xs: 50, md: 60 },
                  mr: 3
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: '"Orbitron", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  textShadow: '0 0 10px rgba(100, 200, 255, 0.5)',
                }}
              >
                METALLIC CARE
              </Typography>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={handleMobileMenuClick}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={mobileMenuOpen}
                onClose={handleClose}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.name} 
                    component={Link} 
                    to={item.path}
                    onClick={handleClose}
                  >
                    <Typography textAlign="center">{item.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 2
            }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'secondary.main',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover:after': {
                      width: '80%'
                    },
                    '&.active': {
                      color: 'secondary.main',
                      '&:after': {
                        width: '80%'
                      }
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* Right Side Icons */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 1
            }}>
              <IconButton 
                size="large" 
                color="inherit"
                component={Link}
                to="/contact"
                sx={{
                  '&:hover': {
                    color: 'secondary.main',
                    transform: 'scale(1.1)'
                  }
                }}
              >
                <Badge color="secondary" variant="dot">
                  <Phone fontSize="small" />
                </Badge>
              </IconButton>
              <Button 
                variant="contained" 
                color="secondary" 
                size="small"
                component={Link}
                to="/appointment"
                startIcon={<LocalCarWash />}
                sx={{
                  borderRadius: 20,
                  px: 3,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(255, 152, 0, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(255, 152, 0, 0.4)'
                  }
                }}
              >
                Book Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;