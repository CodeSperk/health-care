import { Box, Button, Container, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <Container sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      my: 16,

    }}>

{/* Hero Left */}
      <Box sx={{
        flex: 1,
        position: "relative",
      }}>
        <Box sx={{
          position: "absolute",
          top: "-120px",
          left: "-120px"
        }}>
          <Image alt="Hero Background" src={assets.svgs.grid}/>
        </Box>

        <Box >
        <Typography variant="h3" fontWeight={600}>Helthier Hearts</Typography>
        <Typography variant="h3" fontWeight={600}>Come From</Typography>
        <Typography variant="h3" fontWeight={600} color="primary.main">Preventive Care</Typography>
        </Box>
        <Typography mt={2} variant="h6" component="p" sx={{maxWidth: "600px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, deleniti obcaecati. Cum magnam architecto dignissimos cumque itaque aliquam voluptate vitae.</Typography>

        <Box mt={4}>
        <Button sx={{textTransform: "uppercase"}}>Make Appointment</Button>
        <Button sx={{textTransform: "uppercase", ml: 2, '&:hover': {
      bgcolor: "primary.main",
      color:"white" 
    }, }} variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      
 {/*Hero right  */}
      <Box p={1} sx={{position: "relative", maxWidth: "45%"}}>
        <Box sx={{position: "absolute", left: "160px", top: "-20px" }}><Image src={assets.svgs.arrow} alt="arrow"/>
        </Box>
        <Box sx={{display: "flex", gap: "16px"}}>
          <Box mt={6}><Image src={assets.images.doctor1} alt="doctor"/></Box>
          <Box><Image src={assets.images.doctor2} alt="doctor"/></Box>
        </Box>
        <Box sx={{position: "absolute", bottom: "-40px", left:"120px"}}><Image width="230" src={assets.images.doctor3} alt="doctor"/></Box>
        <Box sx={{position: "absolute", bottom: "-30px", right: "-40px", zIndex: "-1"}}><Image width={200} src={assets.images.stethoscope} alt="Stethoscope"/></Box>

      </Box>
    </Container>
  );
};

export default Hero;