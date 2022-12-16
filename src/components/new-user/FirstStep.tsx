import React, { useState } from 'react';
import FirstStepLayout from '../../layout/new-user/FirstStepLayout';
import { useNavigate } from 'react-router-dom';

const FirstStep = () => {
  const [info, setInfo] = useState({ part: 'visual', name: '', linkTree: '' });
  const navigate = useNavigate();
  const partList = [
    {
      partName: 'visual',
      name: '시각'
    },
    {
      partName: 'media',
      name: '미디어'
    },
    {
      partName: 'fashion',
      name: '패션'
    },
    {
      partName: 'living',
      name: '리빙'
    }
  ];
  const goStep2 = () => {
    if (!info.name || !info.linkTree) return;
    navigate('/new-user/step2');
  };

  return <FirstStepLayout info={info} setInfo={setInfo} partList={partList} goStep2={goStep2} />;
};

export default FirstStep;
