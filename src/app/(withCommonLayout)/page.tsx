import React from 'react';
import {Button} from "@mui/material"
import Hero from '@/ui/homePage/Hero/Hero';
import Specialist from '@/ui/homePage/Specialist/Specialist';
import TopRatedDoctors from '@/ui/homePage/TopRatedDoctors/TopRatedDoctors';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Specialist/>
      <TopRatedDoctors/>
    </div>
  );
};

export default HomePage;