import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper, useTheme, Chip, Divider, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/Service';
import AnimatedSection from '../../components/AnimationSection/Animation';
import HomeBG from '../../assets/images/HomeBG.jpg';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import ShieldIcon from '@mui/icons-material/Shield';
import ScienceIcon from '@mui/icons-material/Science';

const Home = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Paint Protection Film (PPF)',
      description: 'Ultra-thin, durable, and virtually invisible protective film that shields your car\'s paint from chips, scratches, and environmental damage.',
      icon: 'shield',
      link: '/services#ppf',
      popular: true,
      features: ['Self-healing', '10-year warranty', 'UV protection']
    },
    {
      title: 'Ceramic Coating',
      description: 'Nanotechnology liquid polymer that chemically bonds with your car\'s factory paint, creating a permanent layer of protection.',
      icon: 'layers',
      link: '/services#ceramic',
      features: ['5-year warranty', 'Hydrophobic', 'Enhanced gloss']
    },
    {
      title: 'Graphene Coating',
      description: 'The latest in protection technology offering superior durability, hydrophobicity, and thermal resistance.',
      icon: 'science',
      link: '/services#graphene',
      premium: true,
      features: ['7-year warranty', 'Thermal resistant', 'Extra durable']
    },
  ];

  const stats = [
    { value: '2,500+', label: 'Vehicles Protected' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '15', label: 'Industry Awards' },
    { value: '10', label: 'Certified Technicians' }
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          minHeight: 800,
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HomeBG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <AnimatedSection>
              <Chip
                label="Premium Protection Services"
                color="secondary"
                size="medium"
                icon={<StarIcon />}
                sx={{ mb: 3, px: 3, py: 1, fontWeight: 600 }}
              />
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: 1.2,
                  mb: 3,
                  background: `#fff`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                Automotive Protection Redefined
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  maxWidth: 800,
                  mx: 'auto',
                  mb: 5,
                  fontWeight: 300,
                  fontSize: '1.3rem'
                }}
              >
                Professional-grade solutions to preserve your vehicle's beauty and value with cutting-edge technology
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  component={Link}
                  to="/services"
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}
                  component={motion.div}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 20px ${theme.palette.secondary.light}`
                  }}
                >
                  Explore Services
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  color="inherit"
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Get a Quote
                </Button>
              </Stack>
            </AnimatedSection>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, background: 'linear-gradient(135deg, #111111 0%, #333333 100%)', color: 'white' }}>
        <Container>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h2"
                      component="div"
                      sx={{
                        fontWeight: 800,
                        color: theme.palette.secondary.main,
                        mb: 1
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Preview */}
      <Box sx={{ py: 10, background: '#f9f9f9' }}>
        <Container>
          <AnimatedSection>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 80,
                    height: 3,
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: 3
                  }
                }}
              >
                Our Signature Services
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  maxWidth: 800,
                  mx: 'auto',
                  mt: 3,
                  color: 'text.secondary',
                  fontWeight: 300
                }}
              >
                Advanced protection solutions using the latest technologies and premium materials
              </Typography>
            </Box>
          </AnimatedSection>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimatedSection delay={index * 0.2}>
                  <ServiceCard service={service} />
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>

          <AnimatedSection>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Button
                component={Link}
                to="/services"
                variant="outlined"
                size="large"
                color="primary"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1.1rem'
                }}
              >
                View All Services
              </Button>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: 10 }}>
        <Container>
          <AnimatedSection>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 80,
                    height: 3,
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: 3
                  }
                }}
              >
                Why Choose Metallic Car Care
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  maxWidth: 800,
                  mx: 'auto',
                  mt: 3,
                  color: 'text.secondary',
                  fontWeight: 300
                }}
              >
                We go beyond standard detailing to deliver museum-quality protection for your vehicle
              </Typography>
            </Box>
          </AnimatedSection>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <AnimatedSection delay={0.2}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: '0 15px 30px rgba(63, 81, 181, 0.1)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(63, 81, 181, 0.1)',
                      borderRadius: '50%',
                      mb: 3,
                      color: theme.palette.primary.main
                    }}
                  >
                    <ShieldIcon fontSize="large" />
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                    Certified Professionals
                  </Typography>
                  <Typography color="text.secondary">
                    Our master installers undergo rigorous training and hold certifications from all major coating and film manufacturers.
                  </Typography>
                </Paper>
              </AnimatedSection>
            </Grid>
            <Grid item xs={12} md={4}>
              <AnimatedSection delay={0.4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: '0 15px 30px rgba(63, 81, 181, 0.1)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(63, 81, 181, 0.1)',
                      borderRadius: '50%',
                      mb: 3,
                      color: theme.palette.primary.main
                    }}
                  >
                    <ScienceIcon fontSize="large" />
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                    Premium Products
                  </Typography>
                  <Typography color="text.secondary">
                    We use only the highest quality coatings and films from industry leaders like XPEL, Ceramic Pro, and Gtechniq.
                  </Typography>
                </Paper>
              </AnimatedSection>
            </Grid>
            <Grid item xs={12} md={4}>
              <AnimatedSection delay={0.6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: '0 15px 30px rgba(63, 81, 181, 0.1)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(63, 81, 181, 0.1)',
                      borderRadius: '50%',
                      mb: 3,
                      color: theme.palette.primary.main
                    }}
                  >
                    <LocalCarWashIcon fontSize="large" />
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                    Satisfaction Guarantee
                  </Typography>
                  <Typography color="text.secondary">
                    All our services come with comprehensive warranties and our 100% satisfaction guarantee.
                  </Typography>
                </Paper>
              </AnimatedSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)', color: 'white' }}>
        <Container>
          <AnimatedSection>
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800, mb: 3 }}>
                Ready to Protect Your Investment?
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, fontWeight: 300 }}>
                Schedule a consultation with our protection specialists today and get a free estimate
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 6,
                  py: 2,
                  fontWeight: 600,
                  fontSize: '1.1rem'
                }}
                component={motion.div}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255,255,255,0.4)'
                }}
              >
                Get Your Free Quote
              </Button>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;