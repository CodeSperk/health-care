"use client"
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import assets from '@/assets';
import Link from 'next/link';
import { FieldValues } from "react-hook-form"
import { modifyPayload } from '@/utils/modifyPayload';
import { registerPatient } from '@/services/actions/registerPatient';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/authService';
import HCForm from '@/components/Forms/HCForm';
import HCInput from '@/components/Forms/HCInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Valid email is required"),
  contactNumber: z.string().regex(/^\d{11}/, "Please provide valid Phone Number") ,
  address: z.string().min(1,"Please your address"),
})
export const validationSchema = z.object({
  password: z.string().min(6, "minimum 6 character"),
  patient: patientValidationSchema,
})

const defaultValues =
  {
    password: "",
    patient: {
      name: "",
      email: "",
      contactNumber: "",
      address: "",
    }
  };


const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
    const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try{
      const res = await registerPatient(data);
      if(res?.data?.id){
        setErrorMessage("");
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password, 
          email: values.patient.email});
        if(result?.data?.accessToken){
          storeUserInfo({accessToken: result?.data?.accessToken});
          router.push("/");
        }
      }else{
        setErrorMessage(res?.message || "Registration failed. Please try with another email.");
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


      
          <Box>
           {errorMessage && 
            <Typography sx={{
            backgroundColor: "rgba(255,0,0, 0.1)",
            padding: "2px",
            color: "rgba(255,0,0, 0.7)",
            borderRadius: "2px",
            mt: 2,
            textAlign: "center"
            }}>{errorMessage}</Typography>}
          </Box> 
         
          
          <Box my={2}>
            <HCForm 
              onSubmit={(handleRegister)} resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
              >
            <Grid container spacing={2}>
              <Grid item md={12}>
              <HCInput  
              label="Name"
              name='patient.name'  
              fullWidth={true}  
              />
              </Grid>
              <Grid item md={6}>
              <HCInput 
              label="Email"
              type='email'
              name='patient.email'  
              fullWidth={true}  
              />
              </Grid>
              <Grid item md={6}>
              <HCInput 
                label="Password"
                type='password'
                name='password'  
                fullWidth={true}
              />
              </Grid>
              <Grid item md={6}>
              <HCInput 
                label="Contact Number"
                type='tel'
                name='patient.contactNumber'  
                fullWidth={true}
              />
              </Grid>
              <Grid item md={6}>
              <HCInput
              label="Address"
              name='patient.address'  
              fullWidth={true} 
              />
              </Grid>

            </Grid>
            <Button type='submit' fullWidth={true} sx={{my:2,}}>Register</Button>
            </HCForm>
            <Box textAlign="center" >
            <Typography variant="h6" sx={{
                mt: 1,
              }}>
                Do you already have account? <Link style={{color: "#1586FD"}} href="/login">Login</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;