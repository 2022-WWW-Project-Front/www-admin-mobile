import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './icon/Logo';

const HeaderLayout = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <span>ARTIST PAGE</span>
      <LogoutBtn>로그아웃</LogoutBtn>
    </HeaderContainer>
  );
};

export default HeaderLayout;

const HeaderContainer = styled.div`
  background-color: var(--black-400);
  position: relative;
  z-index: 200;
  height: 10.375rem;
  padding: 1rem 1.25rem;
  span {
    display: block;
    font-family: 'www', sans-serif;
    color: var(--opacity-white);
    font-size: 1.625rem;
    letter-spacing: 0.015em;
    text-indent: -1.4px;
    margin-top: 1.25rem;
  }
`;

const LogoutBtn = styled.div`
  color: var(--white);
  font-weight: 700;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;
