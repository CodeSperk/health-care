import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties");
  const {data: specialists} = await res.json();

  return (
    <Container sx={{mt: 28,}}>
      <Typography variant="h4" fontWeight={600}>Explore Treatments Across Specialist</Typography>
      <Typography component="p" mt={1} fontSize={18}>Experienced Doctors Across All Specialist</Typography>

      <Stack direction="row" gap={4} justifyContent="space-between" mt={6}>
        {
          specialists?.map((specialty: any) => (
            <Box key={specialty.id} sx={{
              flexWrap: "wrap",
              width: "160px",
              bgcolor: "rgba(240, 240, 240, 1)",
              border: "1px solid rgba(250, 250, 250, 1)",
              borderRadius: "10px",
              padding: "40px 10px",
              textAlign: "center",
              cursor: "pointer",
              "& img" : {
                width: "64px",
                height: "64px",
                margin: "0 auto"
              },
              "& p": {
                margin: "20px auto 0"
              },
              "&:hover":{
                border: "1px solid #1586FD",
                transition: 700,
              }
            }}>
              <Image src={specialty.icon || ""} alt="specialty icon" width={100} height={100}></Image>
              <Typography component="p">{specialty.title}</Typography>
            </Box>
          ))
        }
      </Stack>

      <Box sx={{width:"100%", display: "flex", justifyContent: "center"}}>
      <Button variant="outlined" sx={{margin:"28px auto 0"}}>View All</Button>
      </Box>
    </Container>
  );
};

export default Specialist;