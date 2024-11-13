"use client"

import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import assets from "@/assets"
import { SubmitHandler, useForm } from 'react-hook-form';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/authService';

export type FormValues={
  email : string;
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues> ();
  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try{
     const res = await userLogin(values);
    if(res?.data?.accessToken){
      storeUserInfo({accessToken: res?.data?.accessToken});
    }
    }catch (err: any){
      console.error(err.message);
    }
  }
  
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
                HealthCare Login
              </Typography>
            </Box>
          </Stack>
          
          <Box my={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='email' label="Email" variant="outlined" fullWidth={true} size='small' {...register("email")}/>
              </Grid>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='password' label="Password" variant="outlined" fullWidth={true} size='small' {...register("password")}/>
              </Grid>
            </Grid> 
              <Box sx={{
                textAlign:"end",
                my: 1,
                cursor: "pointer",
              }}>
                <Typography>Forgot Password?</Typography>
              </Box>            
            <Button type='submit' fullWidth={true} sx={{my:2,}}>Register</Button>
            </form>
            <Box textAlign="center" >
            <Typography variant="h6" sx={{
                mt: 1,
              }}>
                Don&apos;t you have an account? <Link className='text-blue-500' href="/register">Register</Link>
              </Typography>
            </Box>
          </Box>
            
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;