import { Box, Typography } from '@mui/material';
import React from 'react';

const TopRatedDoctors = () => {
  return (
    <Box mt={10}>
      <Box>
      <Typography variant="h4" fontWeight={600}></Typography>
      <Typography component="p" fontSize={18}>Experienced Doctors Across All Specialist</Typography>
      </Box>
    </Box>
  );
};

export default TopRatedDoctors;