import React from 'react';
import { Box, Typography, Container, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, useTheme, Chip, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AnimatedSection from '../../components/AnimationSection/Animation';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import PPFVideo from '../../assets/videos/T1QPPHUJQX7ZM7CS.mp4';
import GrapheneVideo from '../../assets/videos/T9JDMF7V3A2HQ83Z.mp4';
import CeramicVideo from '../../assets/videos/TDMWA92CHJNODFCA.mp4';
import { Start } from '@mui/icons-material';

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      id: 'ppf',
      title: 'Paint Protection Film (PPF)',
      description: 'Ultra-thin, durable, and virtually invisible protective film that shields your car\'s paint from chips, scratches, and environmental damage.',
      benefits: [
        'Protects against rock chips, road debris, and minor scratches',
        'Self-healing properties for minor imperfections',
        'Preserves resale value by maintaining original paint',
        'UV protection to prevent fading and oxidation',
        'Maintains glossy appearance for years'
      ],
      video: PPFVideo,
      duration: '1-2 days',
      warranty: '10 years',
      premium: true,
      icon: 'shield',
      features: [
        { name: 'Thickness', value: '8 mil' },
        { name: 'Coverage', value: 'Full vehicle' },
        { name: 'Technology', value: 'Self-healing' }
      ]
    },
    {
      id: 'ceramic',
      title: 'Ceramic Coating',
      description: 'Nanotechnology liquid polymer that chemically bonds with your car\'s factory paint, creating a permanent layer of protection.',
      benefits: [
        'Creates an ultra-hydrophobic surface that repels water and dirt',
        'Provides UV protection to prevent paint fading',
        'Makes cleaning easier with its slick surface',
        'Adds depth and gloss to your paintwork',
        'Long-lasting protection (2-5 years depending on product)'
      ],
      video: CeramicVideo,
      duration: '1 day',
      warranty: '5 years',
      icon: 'science',
      features: [
        { name: 'Layers', value: '2-3 layers' },
        { name: 'Hardness', value: '9H' },
        { name: 'Hydrophobicity', value: '110°+' }
      ]
    },
    {
      id: 'graphene',
      title: 'Graphene Coating',
      description: 'The latest in protection technology offering superior durability, hydrophobicity, and thermal resistance.',
      benefits: [
        'Exceptional durability and longevity (up to 7 years)',
        'Superior heat resistance compared to ceramic coatings',
        'Enhanced hydrophobic properties for better water beading',
        'Improved scratch resistance',
        'Better chemical resistance against harsh contaminants'
      ],
      video: GrapheneVideo,
      duration: '1-2 days',
      warranty: '7 years',
      premium: true,
      icon: 'layers',
      features: [
        { name: 'Thermal Conductivity', value: '5000 W/mK' },
        { name: 'Thickness', value: '2-3 microns' },
        { name: 'Hydrophobicity', value: '120°+' }
      ]
    }
  ];

  return (
    <Box sx={{ 
      py: 15,
      background: 'linear-gradient(to bottom, #f9f9f9 0%, #ffffff 100%)'
    }}>
      <Container maxWidth="xl">
        <AnimatedSection>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="Premium Protection" 
              color="secondary" 
              size="medium"
              sx={{ mb: 3, px: 3, py: 1, fontWeight: 600 }}
            />
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Advanced Automotive Protection
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 800, 
                mx: 'auto',
                fontSize: '1.2rem'
              }}
            >
              Professional-grade solutions to preserve your vehicle's beauty and value for years to come
            </Typography>
          </Box>
        </AnimatedSection>

        {services.map((service, index) => (
          <Box 
            key={service.id} 
            id={service.id} 
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            sx={{ 
              mb: 12,
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                bottom: -40,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: 1,
                background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)'
              },
              '&:last-child:before': {
                display: 'none'
              }
            }}
          >
            <Grid container spacing={6} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative' }}>
                  {service.premium && (
                    <Chip
                      label="Premium Service"
                      color="secondary"
                      icon={<Start />}
                      sx={{ 
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 1,
                        fontWeight: 600
                      }}
                    />
                  )}
                  <VideoPlayer 
                    src={service.video} 
                    poster={`/assets/images/${service.id}-preview.jpg`}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      height: '100%',
                      minHeight: 350
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      color: theme.palette.primary.dark,
                      mb: 3
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography variant="h6" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                    {service.description}
                  </Typography>
                  
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={6}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: 2,
                        background: 'rgba(63, 81, 181, 0.05)',
                        height: '100%'
                      }}>
                        <Typography variant="subtitle2" color="text.secondary">
                          Installation Time
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {service.duration}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: 2,
                        background: 'rgba(63, 81, 181, 0.05)',
                        height: '100%'
                      }}>
                        <Typography variant="subtitle2" color="text.secondary">
                          Warranty
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {service.warranty}
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                  
                  <Box sx={{ mt: 'auto' }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large"
                      component={motion.div}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: `0 0 20px ${theme.palette.primary.light}`
                      }}
                      sx={{ 
                        fontWeight: 600,
                        px: 4,
                        mr: 2
                      }}
                    >
                      Book Service
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      size="large"
                      sx={{ fontWeight: 600 }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={4} sx={{ mb: 6 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Key Benefits
                </Typography>
                <Box 
                  component={motion.div}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                  }}
                >
                  {service.benefits.map((benefit, i) => (
                    <Box 
                      key={i}
                      component={motion.div}
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -20 }
                      }}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        p: 2,
                        borderRadius: 2,
                        background: 'rgba(63, 81, 181, 0.03)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          background: 'rgba(63, 81, 181, 0.08)',
                          transform: 'translateX(5px)'
                        }
                      }}
                    >
                      <CheckCircleIcon color="primary" sx={{ mr: 2 }} />
                      <Typography>{benefit}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Technical Specifications
                </Typography>
                <Grid container spacing={2}>
                  {service.features.map((feature, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Paper 
                        elevation={0} 
                        sx={{ 
                          p: 3,
                          height: '100%',
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'divider',
                          transition: 'all 0.3s',
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            boxShadow: '0 5px 15px rgba(63, 81, 181, 0.1)'
                          }
                        }}
                      >
                        <Typography variant="subtitle2" color="text.secondary">
                          {feature.name}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {feature.value}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            <Accordion 
              elevation={0}
              sx={{ 
                borderRadius: '16px !important',
                border: '1px solid',
                borderColor: 'divider',
                overflow: 'hidden',
                '&:before': {
                  display: 'none'
                }
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  background: 'rgba(63, 81, 181, 0.05)',
                  '&:hover': {
                    background: 'rgba(63, 81, 181, 0.08)'
                  }
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Frequently Asked Questions</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Box sx={{ p: 3 }}>
                  <Typography paragraph sx={{ mb: 3 }}>
                    <Box component="span" sx={{ fontWeight: 700, display: 'block', mb: 1 }}>
                      How long does the installation take?
                    </Box>
                    The installation typically takes {service.duration} depending on the size of your vehicle and the specific package you choose.
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography paragraph sx={{ mb: 3 }}>
                    <Box component="span" sx={{ fontWeight: 700, display: 'block', mb: 1 }}>
                      How should I maintain my vehicle after application?
                    </Box>
                    We recommend using pH-neutral car shampoos and avoiding automatic car washes with brushes. We'll provide you with detailed aftercare instructions.
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography paragraph>
                    <Box component="span" sx={{ fontWeight: 700, display: 'block', mb: 1 }}>
                      Can I apply wax over the {service.title}?
                    </Box>
                    {service.title === 'Paint Protection Film (PPF)' ? 
                      'No, wax should not be applied over PPF as it can leave residue. We recommend using specific PPF maintenance products.' : 
                      'While not necessary, you can apply a compatible wax or sealant for added gloss. We recommend our maintenance products for best results.'}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Services;