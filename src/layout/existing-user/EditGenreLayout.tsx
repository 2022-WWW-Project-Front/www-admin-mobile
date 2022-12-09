import React from 'react';
import * as S from '../common/commonStyle';
import CheckRadio from '../common/icon/CheckRadio';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface EditGenreProps {
  info: {
    part: string;
    name: string;
    linkTree: string;
  };
  setInfo: (info: { linkTree: string; part: string; name: string }) => void;
  partList: {
    partName: string;
    name: string;
  }[];
  changeInfo: () => void;
}

const EditGenreLayout = ({ info, setInfo, partList, changeInfo }: EditGenreProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <S.ProcessHeader>
        <S.BackIcon onClick={() => navigate(-1)} />
        장르 / 연락처 변경
      </S.ProcessHeader>
      <S.Content>
        <RadioContainer>
          <h3>분야</h3>
          <RadioInputBox>
            {partList.map(({ partName, name }) => (
              <RadioOption
                key={partName}
                onClick={() => setInfo({ ...info, part: partName })}
                value={partName === info.part}
              >
                <CheckRadio check={partName === info.part ? 'var(--black-400)' : 'var(--placeholder)'} />
                <input type="radio" required name="part" id={partName} value={partName} />
                <label htmlFor={partName}>{name}</label>
              </RadioOption>
            ))}
          </RadioInputBox>
        </RadioContainer>
        <S.InputBox>
          <h3>작가명</h3>
          <input
            type={'text'}
            value={info.name}
            required
            placeholder="프로필에 표시될 작가명을 입력해주세요."
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </S.InputBox>
        <S.InputBox>
          <h3>링크트리</h3>
          <input
            type={'text'}
            value={info.linkTree}
            required
            placeholder="연락처에 연결할 링크를 입력해주세요."
            onChange={(e) => setInfo({ ...info, linkTree: e.target.value })}
          />
        </S.InputBox>
        <NextBtn onClick={changeInfo}>수정완료</NextBtn>
      </S.Content>
    </div>
  );
};

export default EditGenreLayout;

const RadioContainer = styled.div`
  margin-bottom: 2.25rem;
  h3 {
    margin-bottom: 1.125rem;
    font-weight: 600;
    span {
      color: var(--black-100);
      font-weight: 400;
    }
  }
`;

const RadioInputBox = styled.div`
  width: 14.375rem;
  height: 4.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const RadioOption = styled.div<{ value: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ value }) => (value ? 'var(--black-500)' : 'var(--input-label)')};
  font-weight: ${({ value }) => (value ? 500 : 400)};
  svg {
    display: flex;
    position: absolute;
    left: 0;
  }
  input {
    opacity: 0;
    margin-right: 1rem;
  }
`;

export const NextBtn = styled.button`
  width: calc(100% - 2.5rem);
  height: 4.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-400);
  color: var(--white);
  font-weight: 600;
  font-size: 1.25rem;
  border: none;
  position: absolute;
  bottom: 1.25rem;
`;
