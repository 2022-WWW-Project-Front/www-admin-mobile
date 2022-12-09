import React from 'react';
import * as S from '../common/commonStyle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface LastStepProps {
  imageSrc: string[];
  encodeFileToBase64: (event: { target: HTMLInputElement }) => void;
  deleteArtworkImg: (idx: number) => void;
  description: { title: string; content: string };
  setDescription: (description: { title: string; content: string }) => void;
  video: string;
  addVideo: (event: { target: HTMLInputElement }) => void;
  deleteVideo: (video: string) => void;
  complete: () => void;
}

const LastStepLayout = ({
  imageSrc,
  encodeFileToBase64,
  deleteArtworkImg,
  description,
  setDescription,
  video,
  addVideo,
  deleteVideo,
  complete
}: LastStepProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <S.ProcessHeader>
        <S.BackIcon onClick={() => navigate(-1)} />
        신규등록 3/3
      </S.ProcessHeader>
      <S.Content>
        <S.InputBox>
          <h3>
            작품 사진 <span style={{ fontSize: '0.75rem', marginLeft: '0.75rem' }}>*최소 1장 필수 첨부</span>
          </h3>
          <FlexContainer>
            <ImgFile htmlFor="images">
              <img src={'/assets/photos.png'} alt="images preview" />
              <p>{imageSrc.length}/10</p>
            </ImgFile>
            <input
              multiple
              type="file"
              id="images"
              accept="image/png, image/jpeg, image/jpg, image/gif"
              onChange={encodeFileToBase64}
            />
            {imageSrc.map((image, idx) => (
              <ArtworkImage key={image}>
                <img src={image} alt={'artwork'} />
                <div onClick={() => deleteArtworkImg(idx)}>
                  <p></p>
                </div>
              </ArtworkImage>
            ))}
          </FlexContainer>
        </S.InputBox>
        <div style={{ height: '1.125rem' }}></div>
        <S.InputBox>
          <h3>
            작품 영상
            <span style={{ fontSize: '0.75rem', marginLeft: '0.75rem' }}>
              *필수 아님. 최대 1개(100mb) 까지 허용
            </span>
          </h3>
          <FlexContainer>
            <ImgFile htmlFor="video">
              <img src={'/assets/video-box.png'} alt="images preview" />
              <p>{video.length ? 1 : 0}/1</p>
            </ImgFile>
            <input type="file" id="video" accept="video/mp4" onChange={addVideo} />
            {video.length > 0 && (
              <VideoBox>
                <video id="video" src={video} controls></video>
                <div onClick={() => deleteVideo('')}>
                  <p></p>
                </div>
              </VideoBox>
            )}
          </FlexContainer>
        </S.InputBox>
        <S.InputBox>
          <h3>작품 설명</h3>
          <input
            type="text"
            required
            placeholder="제목을 입력해주세요."
            value={description.title}
            onChange={(event) =>
              setDescription({
                ...description,
                title: event.target.value
              })
            }
          />
          <textarea
            required
            id="content"
            placeholder="최소 15자,최대 1000자 로 입력해주세요."
            value={description.content}
            onChange={(event) =>
              setDescription({
                ...description,
                content: event.target.value
              })
            }
          />
          <label htmlFor="content" style={{ fontSize: '0.75rem', display: 'block', textAlign: 'end' }}>
            {description.content.length}/1000
          </label>
        </S.InputBox>
        <S.NextBtn
          style={{ width: '100%', position: 'inherit', marginTop: '2.5rem' }}
          validate={Boolean(
            imageSrc.length > 0 &&
              description.title.length > 0 &&
              description.content.length > 14 &&
              description.content.length < 1001
          )}
          onClick={complete}
        >
          등록 완료
        </S.NextBtn>
      </S.Content>
    </div>
  );
};

export default LastStepLayout;

const ImgFile = styled.label`
  width: 5rem;
  height: 5rem;
  background-color: var(--black-400);
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  img {
    position: absolute;
    top: 1rem;
  }
  p {
    position: absolute;
    bottom: 0.75rem;
    color: var(--white);
    font-weight: 300;
    font-size: 13px;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.8rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding-top: 1.125rem;
`;

const ArtworkImage = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
  div {
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: var(--black-400);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 0.8rem;
      height: 1px;
      background-color: var(--white);
      transform: rotate(45deg);
      &:after {
        display: block;
        content: '';
        width: 0.8rem;
        height: 1px;
        background-color: var(--white);
        transform: rotate(-90deg);
        position: absolute;
      }
    }
  }
`;

const VideoBox = styled.div`
  height: 5rem;
  position: relative;
  video {
    height: 100%;
  }
  div {
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: var(--black-400);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 0.8rem;
      height: 1px;
      background-color: var(--white);
      transform: rotate(45deg);
      &:after {
        display: block;
        content: '';
        width: 0.8rem;
        height: 1px;
        background-color: var(--white);
        transform: rotate(-90deg);
        position: absolute;
      }
    }
  }
`;
