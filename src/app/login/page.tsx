"use client"

import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import assets from "@/assets"
import { FieldValues} from 'react-hook-form';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/authService';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import HCForm from '@/components/Forms/HCForm';
import HCInput from '@/components/Forms/HCInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

export const validationSchema = z.object({
  email: z.string().email("Please enter a vaid email address!"),
  password: z.string().min(6, "Minimum 6 character")
})

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
 
  const handleLogin = async (values: FieldValues) => {
    try{
     const res = await userLogin(values);
      if(res?.data?.accessToken){
        setError("");
      toast.success(res?.message);
      storeUserInfo({accessToken: res?.data?.accessToken});
      router.push("/")
      }else{
        setError(res.message);
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
          <Box>
           {error && 
            <Typography sx={{
            backgroundColor: "rgba(255,0,0, 0.1)",
            padding: "2px",
            color: "rgba(255,0,0, 0.7)",
            borderRadius: "2px",
            mt: 2,
            textAlign: "center"
            }}>{error}</Typography>}
          </Box> 


          <Box my={2}>
            <HCForm 
              onSubmit = {handleLogin} 
              resolver={zodResolver(validationSchema)} 
              defaultValues={{
                email:"",
                password:""
              }}
              >
            <Grid container spacing={2}>
              <Grid item md={6}>
              <HCInput 
              name='email' 
              type='email' 
              label="Email" 
              fullWidth={true}
               />
              </Grid>
              <Grid item md={6}>
              <HCInput 
              name='password' 
              type='password' 
              label="Password" 
              fullWidth={true} 
              />
              </Grid>
            </Grid> 
              <Box sx={{
                textAlign:"end",
                my: 1,
                cursor: "pointer",
              }}>
                <Typography>Forgot Password?</Typography>
              </Box>            
            <Button type='submit' fullWidth={true} sx={{my:2,}}>Login</Button>
            </HCForm>
            <Box textAlign="center" >
            <Typography variant="h6" sx={{
                mt: 1,
              }}>
                Don&apos;t you have an account? <Link style={{color: "#1586FD"}} href="/register"
                >Register</Link>
              </Typography>
            </Box>
          </Box>
            
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;