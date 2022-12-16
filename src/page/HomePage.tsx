import React, { useEffect } from 'react';
import HeaderLayout from '../layout/common/HeaderLayout';
import Footer from '../layout/common/Footer';
import Home from '../components/Home';
import { getCookie } from '../stores/cookies';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const cookie = getCookie();
  const navigate = useNavigate();
  useEffect(() => {
    if (cookie) {
      navigate('artist');
      return;
    }
  }, []);
  return (
    <div>
      <HeaderLayout />
      <Home />
      <Footer />
    </div>
  );
};

export default HomePage;
