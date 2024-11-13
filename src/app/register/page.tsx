"use client"

import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import assets from '@/assets';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  password: string;
  number: string;
  address: string;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <Container>
      <Stack sx={{justifyContent: "center", alignItems: "center", minHeight: "100vh", padding: "50px"}}>
        <Box sx={{
          width: "100%",
          maxWidth: 500,
          boxShadow: 1,
          borderRadius: 1,
          p: 4
        }}>
          <Stack sx={{justifyContent: "center", alignItems: "center"}}>
            <Box>
              <Image src={assets.svgs.logo} alt='login Logo' width={50} height={50}/>
            </Box>
            <Box>
              <Typography variant="h5" sx={{
                fontWeight: 600,
                mt: 1,
              }}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          
          <Box my={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item md={12}>
              <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true} size='small' {...register("name")}/>
              </Grid>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='email' label="Email" variant="outlined" fullWidth={true} size='small' {...register("email", {required: true})}/>
              </Grid>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='password' label="Password" variant="outlined" fullWidth={true} size='small' {...register("password", {required: true})}/>
              </Grid>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='tel' label="Contact No." variant="outlined" fullWidth={true} size='small' {...register("number", {required: true})}/>
              </Grid>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='text' label="Address" variant="outlined" fullWidth={true} size='small' {...register("address")}/>
              </Grid>

            </Grid>
            <Button type='submit' fullWidth={true} sx={{my:2,}}>Register</Button>
            </form>
            <Box textAlign="center" >
            <Typography variant="h6" sx={{
                mt: 1,
              }}>
                Do you already have account? <Link className='text-blue-500' href="/login">Login</Link>
              </Typography>
            </Box>
          </Box>
            
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;