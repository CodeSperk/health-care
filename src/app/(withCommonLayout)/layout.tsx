import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const CommonLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <Navbar/>
      <div className='min-h-[92vh]'>
      {children}
      </div>
      <Footer/>
    </>
  );
};

export default CommonLayout;