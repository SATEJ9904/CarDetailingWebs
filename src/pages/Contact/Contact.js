import React, { useRef, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Divider,
  IconButton,
  useTheme,
  Avatar,
  Chip,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Instagram,
  Twitter,
  Send,
  Schedule,
  LocalCarWash
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Header from '../../components/Header/Header';
import contactImage from '../../assets/images/contact-bg.png';

const Contact = () => {
  const theme = useTheme();
  const form = useRef();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: <Phone fontSize="large" color="primary" />,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      action: 'Available 24/7',
      color: 'primary.light'
    },
    {
      icon: <Email fontSize="large" color="secondary" />,
      title: 'Email Us',
      info: 'info@metallic-care.com',
      action: 'Response within 24 hours',
      color: 'secondary.light'
    },
    {
      icon: <LocationOn fontSize="large" color="success" />,
      title: 'Visit Us',
      info: '123 Auto Care Lane, Detroit, MI',
      action: 'Get Directions',
      color: 'success.light'
    }
  ];

  const socialLinks = [
    { icon: <Facebook />, name: 'Facebook', color: '#3b5998' },
    { icon: <Instagram />, name: 'Instagram', color: '#e1306c' },
    { icon: <Twitter />, name: 'Twitter', color: '#1da1f2' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Get all form data
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      phone: formData.get('user_phone'),
      service: formData.get('service'),
      message: formData.get('message')
    };
  
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_b0fmnun';
    const templateId = 'template_davj28n';
    const publicKey = 'bNkTLLTJoy6trU_Tl';
  
    emailjs.send(serviceId, templateId, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      to_email: 'localhost:3000', // Your receiving email
      subject: `New Service Inquiry from ${data.name} - ${data.service}`
    }, publicKey)
      .then((result) => {
        console.log(result.text);
        setSnackbarMessage('Message sent successfully! We will get back to you soon.');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setSnackbarMessage('Failed to send message. Please try again later.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ pt: 10 }}>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Contact Metallic Care
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4 }}>
            We're here to answer your questions and schedule your next service
          </Typography>
          <Chip
            icon={<LocalCarWash />}
            label="24/7 Customer Support"
            color="primary"
            sx={{
              px: 2,
              py: 1,
              fontSize: '1rem',
              '& .MuiChip-icon': { fontSize: '1.5rem' }
            }}
          />
        </motion.div>
      </Box>

      {/* Contact Methods */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactMethods.map((method, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Paper elevation={4} sx={{
                  p: 4,
                  height: '100%',
                  borderTop: `4px solid ${theme.palette.primary.main}`,
                  borderRadius: 2
                }}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%'
                  }}>
                    <Avatar sx={{
                      bgcolor: method.color,
                      width: 60,
                      height: 60,
                      mb: 3
                    }}>
                      {method.icon}
                    </Avatar>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {method.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
                      {method.info}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 'auto' }}>
                      {method.action}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                Send Us a Message
              </Typography>
              <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="user_name"
                      label="Your Name"
                      variant="outlined"
                      required
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="user_email"
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      required
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="user_phone"
                      label="Phone Number"
                      variant="outlined"
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="service"
                      label="Service Interested In"
                      variant="outlined"
                      select
                      SelectProps={{
                        native: true,
                      }}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    >
                      <option value=""></option>
                      <option value="ppf">Paint Protection Film (PPF)</option>
                      <option value="ceramic">Ceramic Coating</option>
                      <option value="graphene">Graphene Coating</option>
                      <option value="detailing">Premium Detailing</option>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Your Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      endIcon={<Send />}
                      disabled={isSubmitting}
                      sx={{
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(255, 152, 0, 0.3)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(255, 152, 0, 0.5)'
                        }
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Visit Our Facility
                </Typography>
                <Box sx={{
                  height: 300,
                  borderRadius: 2,
                  overflow: 'hidden',
                  mb: 3,
                  boxShadow: 3
                }}>
                  {/* Replace with your actual map component or iframe */}
                  <Box
                    onClick={() => {
                      window.open(`https://www.google.com/maps?q=metallic car care`, '_blank');
                    }}
                    sx={{
                      height: 300,
                      borderRadius: 2,
                      overflow: 'hidden',
                      mb: 3,
                      boxShadow: 3,
                      position: 'relative',
                      cursor: 'pointer',
                      '&:hover .map-overlay': {
                        opacity: 0
                      },
                      '&:hover .map-pin': {
                        transform: 'translateY(-10px)'
                      }
                    }}
                  >
                    {/* Map background with creative styling */}
                    <Box sx={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
                      position: 'relative'
                    }}>
                      {/* Creative road lines */}
                      <Box sx={{
                        position: 'absolute',
                        bottom: '30%',
                        width: '100%',
                        height: 4,
                        backgroundColor: 'grey.700',
                        '&::before, &::after': {
                          content: '""',
                          position: 'absolute',
                          height: 4,
                          backgroundColor: 'grey.700'
                        },
                        '&::before': {
                          width: '30%',
                          top: -30,
                          left: '20%'
                        },
                        '&::after': {
                          width: '40%',
                          top: -60,
                          right: '10%'
                        }
                      }} />

                      {/* Animated location pin */}
                      <Box className="map-pin" sx={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        transition: 'transform 0.3s ease',
                        textAlign: 'center'
                      }}>
                        <LocationOn sx={{
                          fontSize: 48,
                          color: theme.palette.error.main,
                          filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))'
                        }} />
                        <Box sx={{
                          position: 'absolute',
                          top: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 16,
                          height: 16,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.error.main,
                          animation: 'pulse 2s infinite'
                        }} />
                      </Box>

                      {/* Creative overlay with click instruction */}
                      <Box className="map-overlay" sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: 'white',
                        transition: 'opacity 0.3s ease',
                        textAlign: 'center',
                        p: 2
                      }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          Click to view in Google Maps
                        </Typography>
                        <Typography variant="body2">
                          See our location with street view
                        </Typography>
                        <Button
                          variant="outlined"
                          color="inherit"
                          size="small"
                          sx={{ mt: 2 }}
                          startIcon={<LocationOn />}
                        >
                          Open Maps
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Typography variant="h6" sx={{ mb: 2 }}>
                  Business Hours
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {[
                    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' }
                  ].map((item, index) => (
                    <Box key={index} sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1
                    }}>
                      <Schedule color="primary" sx={{ mr: 2 }} />
                      <Typography variant="body1">
                        <strong>{item.day}:</strong> {item.hours}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" sx={{ mb: 2 }}>
                  Connect With Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        backgroundColor: social.color,
                        color: 'white',
                        '&:hover': {
                          backgroundColor: social.color,
                          transform: 'scale(1.1)'
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        py: 8,
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Ready to Protect Your Vehicle?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Schedule an appointment with our detailing experts today
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<LocalCarWash />}
            sx={{
              borderRadius: 2,
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
              }
            }}
          >
            Book Now
          </Button>
        </Container>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;