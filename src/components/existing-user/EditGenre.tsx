import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditGenreLayout from '../../layout/existing-user/EditGenreLayout';

const EditGenre = () => {
  const [info, setInfo] = useState({ part: '', name: '', linkTree: '' });
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
  const changeInfo = () => {
    // forward to server
    navigate('/artist');
  };
  return <EditGenreLayout info={info} setInfo={setInfo} partList={partList} changeInfo={changeInfo} />;
};

export default EditGenre;
