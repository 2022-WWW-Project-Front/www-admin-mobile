import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UpLoading from './UpLoading';
import AlertComplete from './AlertComplete';

const Modal = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  });
  return (
    <ModalBackground>
      <MessageBox>{loading ? <UpLoading /> : <AlertComplete />}</MessageBox>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 999;
  inset: 0;
  background-color: var(--modalBg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageBox = styled.div`
  width: 20.625rem;
  height: 18.75rem;
  background-color: var(--white);
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
