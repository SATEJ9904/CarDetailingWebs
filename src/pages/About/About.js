import React from 'react';
import { Box, Typography, Container, Grid, Avatar, Paper, useTheme, Button, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimationSection/Animation';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { CheckCircle, AutoAwesome, LocalCarWash, EmojiEvents } from '@mui/icons-material';
import AoutBG from '../../assets/images/AboutBG.jpeg'

const About = () => {
  const theme = useTheme();

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      bio: 'With over 15 years in automotive detailing, John founded Auto Elite Care to bring professional-grade protection to every vehicle owner.',
      img: '/assets/images/team1.jpg',
      certifications: ['IDA Certified', 'Ceramic Pro Gold', 'XPEL Master Installer']
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Detailer',
      bio: 'Sarah is a certified installer with specialized training in paint correction and ceramic coating application.',
      img: '/assets/images/team2.jpg',
      certifications: ['Gtechniq Certified', 'Paint Correction Specialist', 'Stek Certified']
    },
    {
      name: 'Mike Chen',
      role: 'PPF Specialist',
      bio: 'Mike has installed over 500 PPF kits with precision and attention to detail that sets our work apart.',
      img: '/assets/images/team3.jpg',
      certifications: ['XPEL Platinum', '3M Preferred Installer', 'SunTek Black']
    }
  ];

  const stats = [
    { value: '2,500+', label: 'Vehicles Protected' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '15', label: 'Industry Awards' },
    { value: '5', label: 'Manufacturer Certifications' }
  ];

  return (
    <Box sx={{ py: 6, background: 'linear-gradient(to bottom, #f9f9f9 0%, #ffffff 100%)' }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ 
          position: 'relative',
          height: '60vh',
          minHeight: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 8,
          overflow: 'hidden',
          borderRadius: 2,
          boxShadow: 3,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AoutBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <AnimatedSection>
            <Box sx={{ textAlign: 'center', color: 'white', px: 2 }}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ 
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                Precision. Passion. Perfection.
              </Typography>
              <Typography variant="h5" sx={{ 
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
                fontStyle: 'italic',
                fontWeight: 300
              }}>
                Elevating automotive care to an art form since 2015
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                component={motion.div}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.4)' }}
                sx={{ fontWeight: 600 }}
              >
                Tour Our Facility
              </Button>
            </Box>
          </AnimatedSection>
        </Box>

        {/* Mission Section */}
        <AnimatedSection>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="Our Philosophy" 
              color="primary" 
              size="medium"
              sx={{ mb: 2, px: 2, py: 1, fontWeight: 600 }}
            />
            <Typography variant="h3" component="h2" gutterBottom sx={{ 
              fontWeight: 700,
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Beyond Detailing - Automotive Preservation
            </Typography>
            <Divider sx={{ 
              width: 100, 
              height: 4, 
              backgroundColor: theme.palette.secondary.main, 
              mx: 'auto',
              my: 4 
            }} />
            <Typography variant="subtitle1" color="text.secondary" sx={{ 
              maxWidth: 800, 
              mx: 'auto',
              fontSize: '1.1rem'
            }}>
              At Auto Elite Care, we don't just clean cars - we protect investments and preserve automotive artistry. 
              Our mission is to deliver museum-grade protection for your daily driver or showpiece.
            </Typography>
          </Box>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection>
          <Paper elevation={0} sx={{ 
            p: 4, 
            mb: 8,
            background: 'linear-gradient(135deg, #111111 0%, #333333 100%)',
            color: 'white',
            borderRadius: 2,
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundImage: 'radial-gradient(circle at 75% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)',
            }
          }}>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" component="div" sx={{ 
                      fontWeight: 800,
                      color: theme.palette.secondary.main,
                      mb: 1
                    }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </AnimatedSection>

        {/* History Timeline */}
        <AnimatedSection>
          <Typography variant="h4" component="h3" gutterBottom sx={{ 
            fontWeight: 700,
            textAlign: 'center',
            mb: 6,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 3,
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
            }
          }}>
            Our Journey
          </Typography>
          
          <Timeline position="alternate" sx={{ mb: 8 }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <LocalCarWash />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                    2015 - Humble Beginnings
                  </Typography>
                  <Typography>
                    Founded as a small detailing shop with just two employees and a single bay garage
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <AutoAwesome />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                    2017 - First Certification
                  </Typography>
                  <Typography>
                    Became the first local shop certified by XPEL for paint protection film installation
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <EmojiEvents />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                    2022 - Current Facility
                  </Typography>
                  <Typography>
                    Moved to our state-of-the-art 10,000 sq ft facility with climate-controlled bays
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ 
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 3
              }
            }}>
              The Elite Team
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mt: 3 }}>
              Our certified technicians combine technical expertise with artistic vision to deliver unparalleled results
            </Typography>
          </Box>
        </AnimatedSection>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          {team.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <AnimatedSection delay={0.2 * index}>
                <Box
                  component={motion.div}
                  whileHover={{ y: -10 }}
                  sx={{
                    height: '100%',
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3
                  }}
                >
                  <Box sx={{
                    height: 300,
                    backgroundImage: `url(${member.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)'
                    }
                  }} />
                  
                  <Box sx={{ 
                    p: 4,
                    position: 'relative',
                    zIndex: 1,
                    mt: -8
                  }}>
                    <Avatar 
                      src={member.img} 
                      alt={member.name}
                      sx={{ 
                        width: 100, 
                        height: 100, 
                        mb: 2,
                        border: `4px solid ${theme.palette.background.paper}`,
                        boxShadow: 3
                      }} 
                    />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ 
                      color: theme.palette.secondary.main,
                      mb: 2,
                      fontWeight: 500
                    }}>
                      {member.role}
                    </Typography>
                    <Typography paragraph sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      {member.bio}
                    </Typography>
                    
                    <Box sx={{ mt: 2 }}>
                      {member.certifications.map((cert, i) => (
                        <Chip
                          key={i}
                          label={cert}
                          size="small"
                          icon={<CheckCircle fontSize="small" />}
                          sx={{ 
                            mr: 1, 
                            mb: 1,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'white'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>

        {/* Facility Section */}
        <AnimatedSection>
          <Box sx={{ 
            p: 6,
            mb: 8,
            borderRadius: 2,
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/facility-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            color: 'white',
            textAlign: 'center'
          }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ 
              fontWeight: 700,
              mb: 3
            }}>
              Surgical-Grade Facility
            </Typography>
            <Typography variant="h6" sx={{ 
              maxWidth: 800,
              mx: 'auto',
              mb: 4,
              fontWeight: 300
            }}>
              Our 10,000 sq ft facility features hospital-grade air filtration, HEPA-filtered paint booths, 
              and precision lighting for flawless results
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              endIcon={<span>→</span>}
              sx={{ fontWeight: 600 }}
            >
              Virtual Tour
            </Button>
          </Box>
        </AnimatedSection>

        {/* Gallery Section */}
        <AnimatedSection>
          <Typography variant="h4" component="h3" gutterBottom sx={{ 
            fontWeight: 700,
            textAlign: 'center',
            mb: 6
          }}>
            Behind the Scenes
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 8 }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={6} md={4} key={item}>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  sx={{
                    height: 250,
                    backgroundImage: `url(/assets/images/gallery-${item}.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 1,
                    boxShadow: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background: 'rgba(0,0,0,0.3)',
                      transition: 'all 0.3s ease',
                      opacity: 0
                    },
                    '&:hover:after': {
                      opacity: 1
                    }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <Paper elevation={4} sx={{ 
            p: 6,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
            color: 'white',
            textAlign: 'center'
          }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ 
              fontWeight: 700,
              mb: 2
            }}>
              Ready to Protect Your Investment?
            </Typography>
            <Typography variant="h6" sx={{ 
              maxWidth: 700,
              mx: 'auto',
              mb: 4,
              fontWeight: 300
            }}>
              Schedule a consultation with our protection specialists today
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ 
                fontWeight: 600,
                px: 6,
                py: 1.5,
                fontSize: '1.1rem'
              }}
              component={motion.div}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px ${theme.palette.secondary.light}`
              }}
            >
              Book Appointment
            </Button>
          </Paper>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default About;