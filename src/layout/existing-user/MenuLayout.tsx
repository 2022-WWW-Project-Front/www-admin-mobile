import React from 'react';
import HeaderLayout from '../common/HeaderLayout';
import Footer from '../common/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuLayout = () => {
  const menuList = [
    {
      nav: '장르 & 연락처 수정',
      link: 'edit-genre'
    },
    {
      nav: '아티스트 수정',
      link: 'edit-artist'
    },
    {
      nav: '작품 수정',
      link: 'edit-artwork'
    }
  ];
  return (
    <div style={{ minHeight: 'calc(100vh - 20.375rem)' }}>
      <HeaderLayout />
      <MenuContainer>
        {menuList.map((menu) => (
          <NavBox key={menu.link} to={menu.link}>
            {menu.nav}
          </NavBox>
        ))}
      </MenuContainer>
      <Footer />
    </div>
  );
};

export default MenuLayout;

const MenuContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 22.375rem);
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 0 6.625rem;
  box-sizing: border-box;
`;

const NavBox = styled(Link)`
  width: 84%;
  max-width: 17.875rem;
  height: 5.625rem;
  background-color: var(--main);
  padding-left: 2rem;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  color: var(--white);
  text-decoration: none;
  letter-spacing: -0.02em;
`;
