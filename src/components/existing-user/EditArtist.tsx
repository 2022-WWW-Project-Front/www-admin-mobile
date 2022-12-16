import React, { useEffect, useState } from 'react';
import EditArtistLayout from '../../layout/existing-user/EditArtistLayout';
import { useNavigate } from 'react-router-dom';
import { useArtistInfoQuery, useEditArtistInfoMutation, useFileUploadMutation } from '../../stores/rtkQuery';

const ALLOW_FILE_EXTENSION = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

const EditArtist = () => {
  const { data: artistInfo } = useArtistInfoQuery();
  const [fileUpload, { data: profile }] = useFileUploadMutation();
  const [editInfo, { isError }] = useEditArtistInfoMutation();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    profileImage: '',
    description: '',
    bio: ''
  });
  useEffect(() => {
    if (artistInfo) {
      setInfo({
        profileImage: artistInfo?.profileImage,
        description: artistInfo?.description,
        bio: artistInfo?.bio
      });
    }
  }, [artistInfo]);

  const encodeFileToBase64 = (event: { target: HTMLInputElement }) => {
    const target = event.target;
    const files = target.files as FileList;

    if (!ALLOW_FILE_EXTENSION.exec(target.value)) {
      alert('파일 형식을 확인해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', files[0]);
    fileUpload(formData);
  };

  useEffect(() => {
    if (profile) {
      setInfo({ ...info, profileImage: profile?.url });
    }
  }, [profile]);

  const backToMenu = () => {
    navigate('/artist');
  };

  const changeInfo = () => {
    editInfo(info);
    if (isError) {
      alert('다시 시도해주십시오. 계속 에러가 날 경우 개발자에게 연락 주세요.');
      return;
    }
    navigate('/artist');
  };

  return (
    <EditArtistLayout
      info={info}
      setInfo={setInfo}
      encodeFileToBase64={encodeFileToBase64}
      backToMenu={backToMenu}
      changeInfo={changeInfo}
    />
  );
};

export default EditArtist;
