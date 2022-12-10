import React, { useState } from 'react';
import styled from 'styled-components';

const AlertComplete = () => {
  const [upload, setUpload] = useState(true);
  return (
    <CompleteContainer>
      <CompleteTitle>{upload ? 'COMPLETE' : 'FAILED'}</CompleteTitle>
      <CompleteContents>{upload ? '작품 등록이 완료되었습니다.' : '다시 시도해주세요.'}</CompleteContents>
      <CloseBtn>확인</CloseBtn>
    </CompleteContainer>
  );
};

export default AlertComplete;

const CompleteContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.375rem;
  position: relative;
`;

const CompleteTitle = styled.div`
  font-family: 'www', sans-serif;
  font-size: 1.25rem;
  line-height: 1.125rem;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: var(--main2);
`;

const CompleteContents = styled.div`
  font-size: 1.25rem;
  text-align: center;
  letter-spacing: -0.015em;
  padding-bottom: 2.25rem;
`;

const CloseBtn = styled.button`
  width: 60%;
  margin: 0 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main);
  color: var(--white);
  font-weight: 600;
  font-size: 1.25rem;
  border: none;
  position: absolute;
  bottom: 1.5rem;
`;
