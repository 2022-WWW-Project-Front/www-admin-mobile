import React from 'react';
import styled from 'styled-components';
import * as S from '../common/commonStyle';
import { useNavigate } from 'react-router-dom';
import CheckRadio from '../common/icon/CheckRadio';

interface FirstStepProps {
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
  goStep2: () => void;
}

const FirstStepLayout = ({ info, setInfo, partList, goStep2 }: FirstStepProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <S.ProcessHeader>
        <S.BackIcon onClick={() => navigate(-1)} />
        신규등록 1/3
      </S.ProcessHeader>
      <S.Content>
        <RadioContainer>
          <h3>
            분야 <span>(4개 중 1개 선택)</span>
          </h3>
          <RadioInputBox>
            {partList.map(({ partName, name }) => (
              <RadioOption
                key={partName}
                onClick={() => setInfo({ ...info, part: partName })}
                value={partName === info.part}
              >
                <CheckRadio check={partName === info.part ? 'var(--active-check)' : 'var(--placeholder)'} />
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
            required
            placeholder="프로필에 표시될 작가명을 입력해주세요."
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </S.InputBox>
        <S.InputBox>
          <h3>링크트리</h3>
          <input
            type={'text'}
            required
            placeholder="연락처에 연결할 링크를 입력해주세요."
            onChange={(e) => setInfo({ ...info, linkTree: e.target.value })}
          />
        </S.InputBox>
        <S.NextBtn onClick={goStep2} validate={Boolean(info.name && info.linkTree)}>
          다음단계
        </S.NextBtn>
      </S.Content>
    </div>
  );
};

export default FirstStepLayout;

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
