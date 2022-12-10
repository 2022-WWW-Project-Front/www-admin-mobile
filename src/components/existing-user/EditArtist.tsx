import React, { useState } from 'react';
import EditArtistLayout from '../../layout/existing-user/EditArtistLayout';
import { useNavigate } from 'react-router-dom';

const ALLOW_FILE_EXTENSION = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

const EditArtist = () => {
  const navigate = useNavigate();
  const [artistInfo, setArtistInfo] = useState({
    profile:
      'https://avatars.githubusercontent.com/u/98644969?s=400&u=473c711eeed5bf1453e9e7522718ed012ece3235&v=4',
    title: '작가소개 공백포함 16자제한',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 공백포한 700자로 제한합니다......`
  });

  const encodeFileToBase64 = (event: { target: HTMLInputElement }) => {
    const target = event.target;
    const files = target.files as FileList;
    const fileLoaded = URL.createObjectURL(files[0]);

    console.log('files: ', files[0]);
    if (!ALLOW_FILE_EXTENSION.exec(target.value)) {
      alert('파일 형식을 확인해주세요.');
      return;
    }
    setArtistInfo({ ...artistInfo, profile: fileLoaded });
  };

  const backToMenu = () => {
    navigate('/artist');
  };

  const changeInfo = () => {
    // forward to server
    navigate('/artist');
  };

  return (
    <EditArtistLayout
      artistInfo={artistInfo}
      setArtistInfo={setArtistInfo}
      encodeFileToBase64={encodeFileToBase64}
      backToMenu={backToMenu}
      changeInfo={changeInfo}
    />
  );
};

export default EditArtist;
