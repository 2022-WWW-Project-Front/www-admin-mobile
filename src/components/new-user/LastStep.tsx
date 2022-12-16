import React, { useState } from 'react';
import LastStepLayout from '../../layout/new-user/LastStepLayout';
import { useDispatch } from 'react-redux';
import { setModal } from '../../stores/admin';

const ALLOW_FILE_EXTENSION = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
const ALLOW_VIDEO_EXTENSION = /(\.mp4)$/i;

const LastStep = () => {
  const [imageSrc, setImageSrc] = useState<string[]>([]);
  const [artworkList, setArtworkList] = useState<File[]>([]);
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState({ title: '', content: '' });
  const dispatch = useDispatch();

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

  const addVideo = (event: { target: HTMLInputElement }) => {
    const target = event.target;
    const files = target.files as FileList;
    const videoUrl = URL.createObjectURL(files[0]);
    if (!ALLOW_VIDEO_EXTENSION.exec(target.value)) {
      alert('파일 형식을 확인해주세요.');
      return;
    }
    setVideo(videoUrl);
  };

  const complete = () => {
    // add to server
    dispatch(setModal(true));
  };

  return (
    <LastStepLayout
      imageSrc={imageSrc}
      encodeFileToBase64={encodeFileToBase64}
      deleteArtworkImg={deleteArtworkImg}
      description={description}
      setDescription={setDescription}
      video={video}
      addVideo={addVideo}
      deleteVideo={setVideo}
      complete={complete}
    />
  );
};

export default LastStep;
