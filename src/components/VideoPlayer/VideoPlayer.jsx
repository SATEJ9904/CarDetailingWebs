import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const VideoPlayer = ({ src }) => {
    return (
        <Box
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0
            }}
        >
            <video controls autoPlay loop muted playsInline>
                <source src={src} type="video/mp4" />
                <source src={src.replace('.mp4', '.webm')} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </Box>
    );
};

export default VideoPlayer;