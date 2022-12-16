import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditGenreLayout from '../../layout/existing-user/EditGenreLayout';
import { useArtistInfoQuery, useEditArtistInfoMutation } from '../../stores/rtkQuery';

const EditGenre = () => {
  const { data: artistInfo } = useArtistInfoQuery();
  const [editInfo, { isError }] = useEditArtistInfoMutation();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: '',
    nickname: '',
    genre: '',
    linkTree: '',
    email: '',
    contact: ''
  });
  useEffect(() => {
    setInfo({
      name: artistInfo?.name,
      nickname: artistInfo?.nickname,
      genre: artistInfo?.genre,
      linkTree: artistInfo?.linkTree,
      email: artistInfo?.email,
      contact: artistInfo?.contact
    });
  }, [artistInfo]);

  const partList = [
    {
      genre: 'visual',
      name: '시각'
    },
    {
      genre: 'media',
      name: '미디어'
    },
    {
      genre: 'fashion',
      name: '패션'
    },
    {
      genre: 'living',
      name: '리빙'
    }
  ];
  const changeInfo = () => {
    editInfo(info);
    if (isError) {
      alert('다시 시도해주십시오.');
      return;
    }
    navigate('/artist');
  };
  return <EditGenreLayout info={info} setInfo={setInfo} partList={partList} changeInfo={changeInfo} />;
};

export default EditGenre;
