import React, { useState } from 'react';
import EditArtworkLayout from '../../layout/existing-user/EditArtworkLayout';
import { useNavigate } from 'react-router-dom';
const ALLOW_FILE_EXTENSION = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

const EditArtwork = () => {
  const [imageSrc, setImageSrc] = useState<string[]>([]);
  const [artworkList, setArtworkList] = useState<File[]>([]);
  const [description, setDescription] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const encodeFileToBase64 = (event: { target: HTMLInputElement }) => {
    const target = event.target;
    const files = target.files as FileList;
    const fileLoaded = URL.createObjectURL(files[0]);

    if (!ALLOW_FILE_EXTENSION.exec(target.value)) {
      alert('파일 형식을 확인해주세요.');
      return;
    }
    if (imageSrc.length > 9) {
      alert('10개까지만 등록이 가능합니다.');
      return;
    }
    setImageSrc([...imageSrc, fileLoaded]);
    setArtworkList([...artworkList, files[0]]);
  };

  const deleteArtworkImg = (idx: number) => {
    setImageSrc(imageSrc.filter((img, index) => idx !== index));
    setArtworkList(artworkList.filter((img, index) => idx !== index));
  };

  const complete = () => {
    // add to server
    navigate('/artist');
  };
  return (
    <EditArtworkLayout
      imageSrc={imageSrc}
      encodeFileToBase64={encodeFileToBase64}
      deleteArtworkImg={deleteArtworkImg}
      description={description}
      setDescription={setDescription}
      complete={complete}
    />
  );
};

export default EditArtwork;
