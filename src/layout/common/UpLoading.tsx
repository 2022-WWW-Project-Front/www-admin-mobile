import React from 'react';
import styled, { keyframes } from 'styled-components';

const UpLoading = () => {
  return (
    <UploadingContainer>
      <UploadingTitle>UPLOADING</UploadingTitle>
      <LoadingBar>
        <p></p>
      </LoadingBar>
    </UploadingContainer>
  );
};

export default UpLoading;

const UploadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.375rem;
`;

const UploadingTitle = styled.div`
  font-family: 'www', sans-serif;
  font-size: 1.25rem;
  line-height: 1.125rem;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: var(--main2);
`;

const loading = keyframes`
  0% {
    width: 0;
  }
  20% {
    width: 20%;
  }
  50%{
    width: 20%;
  }
  52%{
    width: 45%;
  }
  68%{
    width: 45%;
  }
  70%{
    width: 90%;
  }
  95% {
    width: 90%;
  }
  100% {
    width: 100%;
  }
`;

const LoadingBar = styled.div`
  width: 13.25rem;
  height: 0.75rem;
  background-color: var(--sub);
  position: relative;
  p {
    position: absolute;
    height: 0.75rem;
    background-color: var(--main);
    left: 0;
    animation: ${loading} 2s linear 0s 1 normal forwards;
  }
`;
