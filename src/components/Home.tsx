import React, { useState } from 'react';
import HomeLayout from '../layout/HomeLayout';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const goLogin = (code: string) => {
    try {
      alert(`로그인 성공! artist-code: ${code}`);
      navigate('/artist');
    } catch {
      alert('로그인에 실패했습니다. 코드를 다시 확인해주세요.');
    }
  };

  return <HomeLayout code={code} setCode={setCode} goLogin={goLogin} />;
};

export default Home;
