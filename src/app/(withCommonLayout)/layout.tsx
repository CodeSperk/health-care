import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import { Box } from '@mui/material';
import React from 'react';

const CommonLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <Navbar/>
      <Box sx={{minHeight:"92vh"}}>
      {children}
      </Box>
      <Footer/>
    </>
  );
};

export default CommonLayout;