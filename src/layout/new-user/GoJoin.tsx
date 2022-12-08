import React from 'react';
import HeaderLayout from '../common/HeaderLayout';
import Footer from '../common/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GoJoin = () => {
  return (
    <div>
      <HeaderLayout />
      <NewUserContainer>
        <strong>
          There are no
          <br />
          registered works
        </strong>
        <p>
          아직 등록된 정보가 없어요!
          <br />
          신규등록을 진행해주세요.
        </p>
        <SignUpBtn to={'step1'}>신규등록</SignUpBtn>
      </NewUserContainer>
      <Footer />
    </div>
  );
};

export default GoJoin;

const NewUserContainer = styled.div`
  justify-content: center;
  font-size: 1.25rem;
  color: var(--black-400);
  margin: 8rem 1.25rem;
  text-align: center;
  strong {
    font-family: 'www', sans-serif;
    line-height: 1.25rem;
  }
  p {
    margin: 2.5rem 0 5.75rem;
    line-height: 1.875rem;
  }
`;

const SignUpBtn = styled(Link)`
  width: 100%;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main);
  color: var(--white);
  font-weight: 600;
  font-size: 1.25rem;
  border: none;
  margin-bottom: 8.375rem;
  text-decoration: none;
`;
