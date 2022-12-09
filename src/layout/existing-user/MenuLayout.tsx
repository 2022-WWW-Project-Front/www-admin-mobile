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
    <div>
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
  flex-direction: column;
  gap: 3rem;
  margin: 3rem 0;
`;

const NavBox = styled(Link)`
  width: 19.875rem;
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
