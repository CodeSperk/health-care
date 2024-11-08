import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import facebookIcon from '@/assets/landing_page/facebook.png'
import instagramIcon from '@/assets/landing_page/instagram.png'
import linkedInIcon from '@/assets/landing_page/linkedin.png'
import twiteerIcon from '@/assets/landing_page/twitter.png'

const Footer = () => {
  return (
    <Box bgcolor="#172634" py={6} mt={10}>
      <Container >
      <Stack direction="row" gap={4} justifyContent="center">
          <Typography component={Link} href='/plans' color="#fff">Health Plans</Typography>
          <Typography component={Link} href='/consultation' color="#fff">Consultation</Typography>
          <Typography component={Link} href='/medicine' color="#fff">Medicine</Typography>
          <Typography component={Link} href='/diagnostics' color="#fff">Diagnostics</Typography>
          <Typography component={Link} href='/ngo' color="#fff">NGOs</Typography>
      </Stack>

      <Stack direction="row" gap={3} justifyContent='center' py={2}>
        <Image src={facebookIcon} alt='Facebook' width={32} height={32}></Image>
        <Image src={instagramIcon} alt='Facebook' width={32} height={32}></Image>
        <Image src={linkedInIcon} alt='Facebook' width={32} height={32}></Image>
        <Image src={twiteerIcon} alt='Facebook' width={32} height={32}></Image>
      </Stack>
      <div className='border-b-[1px] border-dashed pt-4'></div>
      <Stack direction="row" justifyContent="space-between" alignItems="center" pt={4}>
        <Typography component="p" color='white'>&copy;2024 HealthCare. All Rights Reserved</Typography>
        <Typography 
        variant='h4' 
        component={Link} 
        href='/' 
        fontWeight={600}
        color="#fff"
        ><Box component="span" color="primary.main">Health</Box >Care
        </Typography>

        <Stack direction="row" gap={2}>
        <Typography component={Link} href='/privacy' color="#fff">PrivaryPolicy</Typography> 
        <Typography component="p" color="#fff"> | </Typography> 
        <Typography component={Link} href='/terms' color="#fff">Terms & Conditions</Typography>
        </Stack>
      </Stack>


      </Container>
    </Box>
  );
};

export default Footer;