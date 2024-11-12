import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();

  return (
    <Box
      my={10}
      py={40}
      sx={{
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      

      <Container >
      <Box sx={{ textAlign: "center", maxWidth: "60%", margin: "0 auto" }}>
        <Typography variant="h4" component="h1" fontWeight={600}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontSize={18} mt={1}>
          Access to expert physicians and surgeons, advanced technologies and
          top-quality surgery facilities right here.
        </Typography>
      </Box>
        <Grid container spacing={4} sx={{margin: "30px auto"}} >
          {doctors.map((doctor: any) => (
            <Grid item xs={6} md={4} key={doctor.id}>
              <Card >
                <Box>
                  <Image alt="doctor" src={doctor.profilePhoto} width={500} height={100}/>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {doctor.qualification} , {doctor.designation}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", marginLeft: "-6px" }}>
                    <LocationOnIcon/> {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions sx={{mb:1, px:1}}>
                  <Button size="small">Book Now</Button>
                  <Button size="small" variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{textAlign:"center", mt: 4}}>
          <Button variant="outlined" sx={{margin: "0 auto"}}>View All</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
