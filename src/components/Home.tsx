import React, { useEffect, useState } from 'react';
import HomeLayout from '../layout/HomeLayout';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../stores/rtkQuery';
import { setCookie } from '../stores/cookies';

const Home = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const [login, { data: artistInfo, isError }] = useLoginMutation();
  const goLogin = async (code: string) => {
    await login(code);
  };
  useEffect(() => {
    if (artistInfo) {
      if (artistInfo.name) {
        navigate(`/artist`);
      } else {
        navigate(`/new-user`);
      }
    }
    if (isError) {
      alert('로그인에 실패했습니다. 코드를 다시 확인해주세요.');
    }
    if (artistInfo?.code) {
      setCookie(artistInfo?.code);
    }
  }, [artistInfo, isError]);

  return <HomeLayout code={code} setCode={setCode} goLogin={goLogin} />;
};

export default Home;
