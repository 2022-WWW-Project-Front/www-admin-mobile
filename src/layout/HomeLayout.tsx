import React from 'react';
import styled from 'styled-components';

interface HomeLayoutProps {
  code: string;
  setCode: (code: string) => void;
  goLogin: (code: string) => void;
}

const HomeLayout = ({ code, setCode, goLogin }: HomeLayoutProps) => {
  return (
    <HomeContainer>
      <p>
        ARTIST
        <br />
        LOG-IN
      </p>
      <InputBox>
        <label>코드</label>
        <input
          value={code}
          placeholder={'부여된 코드를 입력해주세요.'}
          onChange={(e) => setCode(e.target.value)}
        />
      </InputBox>
      <LoginBtn onClick={() => goLogin(code)}>로그인</LoginBtn>
    </HomeContainer>
  );
};

export default HomeLayout;

const HomeContainer = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem;
  p {
    width: fit-content;
    margin: 5.375rem auto 0;
    font-family: 'www', sans-serif;
    font-size: 1.875rem;
    text-align: center;
    color: var(--black-400);
  }
`;

const InputBox = styled.div`
  width: 100%;
  margin: 6.75rem 0 2.75rem;
  background-color: orange;
  height: 3.25rem;
  font-size: 0.875rem;
  position: relative;
  input {
    width: 100%;
    padding: 1.75rem 0.625rem 0.625rem;
    border: 1px var(--black-200) solid;
    box-sizing: border-box;
  }
  label {
    position: absolute;
    font-weight: 500;
    top: 0.375rem;
    left: 0.625rem;
    color: var(--active-label);
  }
`;

const LoginBtn = styled.button`
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
`;
