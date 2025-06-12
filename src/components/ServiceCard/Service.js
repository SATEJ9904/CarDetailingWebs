import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ShieldIcon from '@mui/icons-material/Shield';
import LayersIcon from '@mui/icons-material/Layers';
import ScienceIcon from '@mui/icons-material/Science';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import StarIcon from '@mui/icons-material/Star';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const iconComponents = {
  shield: ShieldIcon,
  layers: LayersIcon,
  science: ScienceIcon,
  carwash: LocalCarWashIcon
};

const Service = ({ service }) => {
  const IconComponent = iconComponents[service.icon] || ShieldIcon;

  return (
    <Card 
      component={motion.div}
      whileHover={{ 
        y: -10,
        boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid',
        borderColor: 'divider',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #3f51b5, #2196f3)',
        }
      }}
    >
      <CardContent sx={{ 
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 4,
        pt: 5
      }}>
        <Box 
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          sx={{
            width: 90,
            height: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)',
            borderRadius: '50%',
            mb: 3,
            color: 'white',
            boxShadow: '0 5px 15px rgba(33, 150, 243, 0.3)'
          }}
        >
          <IconComponent sx={{ fontSize: 44 }} />
        </Box>
        
        {service.popular && (
          <Chip
            icon={<StarIcon sx={{ fontSize: 16 }} />}
            label="Most Popular"
            color="secondary"
            size="small"
            sx={{ 
              mb: 2,
              fontWeight: 600,
              alignSelf: 'center'
            }}
          />
        )}
        
        <Typography 
          variant="h5" 
          component="h3" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            color: 'text.primary',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 40,
              height: 3,
              background: 'linear-gradient(90deg, #3f51b5, #2196f3)',
              borderRadius: 3
            }
          }}
        >
          {service.title}
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 3,
            flexGrow: 1,
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}
        >
          {service.description}
        </Typography>
        
        {service.features && (
          <Box sx={{ 
            width: '100%',
            mb: 3,
            textAlign: 'left',
            '& ul': {
              pl: 2,
              '& li': {
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                '&:before': {
                  content: '"•"',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  width: '1em',
                  ml: '-1em'
                }
              }
            }
          }}>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Box>
        )}
        
        <Box 
          component={Link} 
          to={service.link}
          whileHover={{ 
            x: 5,
            color: '#2196f3'
          }}
          sx={{ 
            display: 'inline-flex',
            alignItems: 'center',
            color: 'primary.main',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.05rem',
            mt: 'auto'
          }}
        >
          Explore service
          <ArrowOutwardIcon sx={{ 
            ml: 1,
            fontSize: '1rem',
            transition: 'transform 0.2s'
          }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Service;