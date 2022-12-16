import React from 'react';
import styled from 'styled-components';
import Logo from './icon/Logo';

const Footer = () => {
  return (
    <FooterLayout>
      <LogoContainer>
        <Logo width={65} height={23} />
      </LogoContainer>
      <Copyright>
        World Wide Web
        <br />
        WWW Exhibition market
        <br />
        온라인, 오프라인, 사람은 연결되어 있다
        <p>Copyrightⓒ2022.WWW. All rights reserved.</p>
      </Copyright>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.div`
  background-color: var(--black-400);
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  width: 4rem;
  margin-bottom: 0.5rem;
`;

const Copyright = styled.div`
  color: var(--white);
  font-size: 0.625rem;
  text-align: center;
  p {
    margin-top: 1rem;
  }
`;
