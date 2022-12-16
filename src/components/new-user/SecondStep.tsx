import React, { useState } from 'react';
import SecondStepLayout from '../../layout/new-user/SecondStepLayout';
import { useNavigate } from 'react-router-dom';

const ALLOW_FILE_EXTENSION = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

const SecondStep = () => {
  const [intro, setIntro] = useState({ title: '', content: '' });
  const [imageSrc, setImageSrc] = useState('');
  const navigate = useNavigate();

  const encodeFileToBase64 = (event: { target: HTMLInputElement }) => {
    const target = event.target;
    const files = target.files as FileList;
    const fileLoaded = URL.createObjectURL(files[0]);

    console.log('files: ', files[0]);
    if (!ALLOW_FILE_EXTENSION.exec(target.value)) {
      alert('파일 형식을 확인해주세요.');
      return;
    }
    setImageSrc(fileLoaded);
  };

  const goStep3 = () => {
    if (!intro.title || !imageSrc || intro.content.length > 700 || intro.content.length < 15) return;
    navigate('/new-user/step3');
  };

  return (
    <SecondStepLayout
      intro={intro}
      setIntro={setIntro}
      imageSrc={imageSrc}
      encodeFileToBase64={encodeFileToBase64}
      goStep3={goStep3}
    />
  );
};

export default SecondStep;
