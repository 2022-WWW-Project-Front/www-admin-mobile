import React from 'react';
import HeaderLayout from '../layout/common/HeaderLayout';
import Footer from '../layout/common/Footer';
import Home from '../components/Home';

const HomePage = () => {
  return (
    <div>
      <HeaderLayout />
      <Home />
      <Footer />
    </div>
  );
};

export default HomePage;
