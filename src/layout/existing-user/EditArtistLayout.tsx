import React from 'react';
import styled from 'styled-components';
import CloseBtn from '../common/icon/CloseBtn';

interface EditArtistDetailProps {
  artistInfo: {
    profile: string;
    title: string;
    description: string;
  };
  setArtistInfo: (artistInfo: { profile: string; title: string; description: string }) => void;
  encodeFileToBase64: (event: { target: HTMLInputElement }) => void;
  backToMenu: () => void;
  changeInfo: () => void;
}

const EditArtistLayout = ({
  artistInfo,
  setArtistInfo,
  encodeFileToBase64,
  backToMenu,
  changeInfo
}: EditArtistDetailProps) => {
  const { profile, title, description } = artistInfo;
  return (
    <ArtistDetailContainer>
      <ProfileImgContainer>
        <ImgFile htmlFor="profile" imageSrc={profile}>
          <div>
            <img src="/assets/profileBox.svg" alt="profile camera icon" />
          </div>
        </ImgFile>
        <input type="file" id="profile" onChange={encodeFileToBase64} />
        <BtnBox onClick={backToMenu}>
          <CloseBtn />
        </BtnBox>
      </ProfileImgContainer>
      <ContentContainer>
        <input
          type={'text'}
          value={title}
          onChange={(e) => setArtistInfo({ ...artistInfo, title: e.target.value })}
        />
        <textarea
          value={description}
          onChange={(e) => setArtistInfo({ ...artistInfo, description: e.target.value })}
        />
      </ContentContainer>
      <NextBtn onClick={changeInfo}>수정완료</NextBtn>
    </ArtistDetailContainer>
  );
};

export default EditArtistLayout;

const ArtistDetailContainer = styled.div`
  overflow: auto;
  inset: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--sub);
`;

const ProfileImgContainer = styled.div`
  padding-top: 1.3rem;
  height: 20.264rem;
  border-bottom: 1px var(--black-400) solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    display: none;
  }
`;

const ImgFile = styled.label<{ imageSrc: string }>`
  width: 14.375rem;
  height: 14.375rem;
  border: 1px var(--black-100) solid;
  box-sizing: border-box;
  background-image: ${({ imageSrc }) => `url(${imageSrc})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 1.125rem;
  div {
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    margin: 0;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 0.19rem;
    border: 1px var(--black-200) solid;
    background-color: var(--sub);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 1.875rem;
    }
  }
`;

const ContentContainer = styled.div`
  margin: 1.5rem 1.25rem 4rem;
  display: block;
  overflow: auto;
  height: fit-content;
  position: relative;
  input {
    padding: 0.5rem 0.75rem;
    width: calc(100% - 1.5rem);
    font-size: 1.5rem;
    font-weight: 600;
    border: none;
    border-bottom: 1px var(--black-200) solid;
  }
  textarea {
    padding: 0.5rem 0.75rem;
    margin-top: 0.75rem;
    line-height: 1.5rem;
    width: 100%;
    height: 28.25rem;
    border: 1px var(--black-200) solid;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 1rem;
  }
`;

const BtnBox = styled.div`
  position: absolute;
  z-index: 200;
  top: 0;
  right: 0;
`;

const NextBtn = styled.button`
  width: calc(100% - 2.5rem);
  margin: 5.25rem 1.25rem 1.25rem;
  height: 4.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-400);
  color: var(--white);
  font-weight: 600;
  font-size: 1.25rem;
  border: none;
`;
