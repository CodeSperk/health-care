"use client"
import { getUserInfo, isLoggedIn, removeUser } from '@/services/authService';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    removeUser();
    router.refresh();
  }
  return (
    <Container>
      <Stack py={2} direction='row' justifyContent="space-between" alignItems="center">
        <Typography variant='h4' component={Link} href='/' fontWeight={600}><Box component="span" color="primary.main">Health</Box>Care</Typography>

        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href='/plans'>Health Plans</Typography>
          <Typography component={Link} href='/consultation'>Consultation</Typography>
          <Typography component={Link} href='/medicine'>Medicine</Typography>
          <Typography component={Link} href='/diagnostics'>Diagnostics</Typography>
          <Typography component={Link} href='/ngo'>NGOs</Typography>
        </Stack>

        <Box>
          {userInfo?.userId? <Button color='error' onClick={handleLogout}>Logout</Button>:
        <Button component={Link} href='/login'>Login</Button>}
        </Box>

      </Stack>
    </Container>
  );
};

export default Navbar;
