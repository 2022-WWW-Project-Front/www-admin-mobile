import React, { useEffect, useState } from 'react';
import EditArtworkLayout from '../../layout/existing-user/EditArtworkLayout';
import { useNavigate } from 'react-router-dom';
import {
  useArtworkDetailByArtistQuery,
  useEditArtworkInfoMutation,
  useFileUploadMutation
} from '../../stores/rtkQuery';
const ALLOW_FILE_EXTENSION = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

const EditArtwork = () => {
  const [imageSrc, setImageSrc] = useState<string[]>([]);
  const [artworkList, setArtworkList] = useState<File[]>([]);
  const [description, setDescription] = useState({ title: '', content: '' });
  const { data: artwork } = useArtworkDetailByArtistQuery();
  const [fileUpload, { data: asset }] = useFileUploadMutation();
  const [editArtwork, { isError }] = useEditArtworkInfoMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (artwork) {
      setDescription({
        title: artwork?.title,
        content: artwork?.description
      });
      artwork.assets.map((i) => {
        setImageSrc([...imageSrc, i.url]);
      });
    }
  }, [artwork]);

  const encodeFileToBase64 = (event: { target: HTMLInputElement }) => {
    const target = event.target;
    const files = target.files as FileList;

    if (!ALLOW_FILE_EXTENSION.exec(target.value)) {
      alert('파일 형식을 확인해주세요.');
      return;
    }
    if (imageSrc.length > 9) {
      alert('10개까지만 등록이 가능합니다.');
      return;
    }
    const formData = new FormData();
    formData.append('file', files[0]);
    fileUpload(formData);
  };

  useEffect(() => {
    if (asset) {
      setImageSrc([...imageSrc, asset.url]);
    }
  }, [asset]);

  const deleteArtworkImg = (idx: number) => {
    setImageSrc(imageSrc.filter((img, index) => idx !== index));
    setArtworkList(artworkList.filter((img, index) => idx !== index));
  };

  const complete = () => {
    editArtwork({ ...description, assets: imageSrc });
    if (isError) {
      alert('다시 시도해주십시오. 계속 에러가 날 경우 개발자에게 연락 주세요.');
      return;
    }
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
