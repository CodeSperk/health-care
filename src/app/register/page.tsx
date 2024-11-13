"use client"

import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import assets from '@/assets';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form"
import { modifyPayload } from '@/utils/modifyPayload';
import { registerPatient } from '@/services/actions/registerPatient';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface IPatientData{
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}
interface IPatientRegisterFormData{
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData> ()
  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
    const data = modifyPayload(values);
    try{
      const res = await registerPatient(data);
      if(res?.data?.id){
        toast.success(res?.message);
        router.push("/login")
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          
          <Box my={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item md={12}>
              <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true} size='small' {...register("patient.name")}/>
              </Grid>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='email' label="Email" variant="outlined" fullWidth={true} size='small' {...register("patient.email", {required: true})}/>
              </Grid>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='password' label="Password" variant="outlined" fullWidth={true} size='small' {...register("password", {required: true})}/>
              </Grid>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='tel' label="Contact No." variant="outlined" fullWidth={true} size='small' {...register("patient.contactNumber", {required: true})}/>
              </Grid>
              <Grid item md={6}>
              <TextField id="outlined-basic" type='text' label="Address" variant="outlined" fullWidth={true} size='small' {...register("patient.address")}/>
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