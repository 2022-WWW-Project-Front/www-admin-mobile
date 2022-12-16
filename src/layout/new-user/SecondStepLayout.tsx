import React from 'react';
import * as S from '../common/commonStyle';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface SecondStepProps {
  intro: {
    title: string;
    content: string;
  };
  setIntro: (intro: { title: string; content: string }) => void;
  imageSrc: string;
  encodeFileToBase64: (event: { target: HTMLInputElement }) => void;
  goStep3: () => void;
}

const SecondStepLayout = ({ intro, setIntro, imageSrc, encodeFileToBase64, goStep3 }: SecondStepProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <S.ProcessHeader>
        <S.BackIcon onClick={() => navigate(-1)} />
        신규등록 2/3
      </S.ProcessHeader>
      <S.Content>
        <S.InputBox>
          <h3>
            프로필 사진 <span>(최대 8mb)</span>
          </h3>
          <ImgFile htmlFor="images" imageSrc={imageSrc}>
            <div></div>
          </ImgFile>
          <input type="file" id="images" onChange={encodeFileToBase64} />
        </S.InputBox>
        <S.InputBox>
          <h3>작가 소개</h3>
          <input
            type="text"
            required
            placeholder="제목을 입력해주세요."
            value={intro.title}
            onChange={(e) => setIntro({ ...intro, title: e.target.value })}
          />
          <textarea
            required
            id="content"
            placeholder="최소 15자,최대 700자 로 입력해주세요."
            value={intro.content}
            onChange={(e) => setIntro({ ...intro, content: e.target.value })}
          />
          <label htmlFor="content" style={{ fontSize: '0.75rem', display: 'block', textAlign: 'end' }}>
            {intro.content.length}/700
          </label>
        </S.InputBox>
        <S.NextBtn
          onClick={goStep3}
          validate={Boolean(
            intro.title && intro.content.length > 15 && intro.content.length < 700 && imageSrc
          )}
        >
          다음단계
        </S.NextBtn>
      </S.Content>
    </div>
  );
};

export default SecondStepLayout;

const ImgFile = styled.label<{ imageSrc: string }>`
  width: 5rem;
  height: 5rem;
  border-radius: 0.2rem;
  background-color: #c1c6d3;
  background-image: ${({ imageSrc }) => `url(${imageSrc})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 1.125rem;
  ${({ imageSrc }) => {
    if (!imageSrc) {
      return css`
        &::before {
          content: '';
          width: 1.875rem;
          height: 1.875rem;
          background-color: var(--sub);
          border-radius: 50%;
          margin: 0.75rem 25px 0;
        }
        &::after {
          content: '';
          width: 5.75rem;
          height: 5.75rem;
          background-color: var(--sub);
          border-radius: 50%;
          position: absolute;
          left: -0.375rem;
          bottom: -4.125rem;
        }
      `;
    }
  }}
  div {
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    margin: 0;
    width: 1.625rem;
    height: 1.625rem;
    border-radius: 0.19rem;
    border: 1px var(--black-200) solid;
    background-color: var(--sub);
    background-image: url('/assets/profileBox.svg');
    background-position: center;
    background-repeat: no-repeat;
  }
`;
