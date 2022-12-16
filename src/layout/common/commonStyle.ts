import styled from 'styled-components';

export const ProcessHeader = styled.div`
  height: 4.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--black-400);
`;

export const BackIcon = styled.div`
  background-image: url('/assets/Arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 0.625rem;
  height: 1.125rem;
  left: 1.75rem;
`;

export const Content = styled.div`
  padding: 2.375rem 1.25rem 1.25rem;
  color: var(--black);
`;

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 1.75rem;
  h3 {
    font-weight: 600;
    span {
      color: var(--black-100);
      font-weight: 400;
    }
  }
  input[type='text'] {
    margin-top: 1.125rem;
    width: 100%;
    background-color: var(--inputBg);
    padding: 0.875rem 0.625rem;
    border: none;
    box-sizing: border-box;
    margin-bottom: 0.875rem;
    &:focus {
      outline: none;
      box-shadow: 0 0 3px 1px var(--input-focus);
    }
  }
  textarea {
    width: 100%;
    height: 10.125rem;
    resize: none;
    background-color: var(--inputBg);
    padding: 0.875rem 0.625rem;
    border: none;
    box-sizing: border-box;
    margin-bottom: 0.875rem;
    word-wrap: break-word;
    white-space: pre-wrap;
    &:focus {
      outline: none;
      box-shadow: 0 0 3px 1px var(--input-focus);
    }
  }
  input[type='file'] {
    display: none;
    padding-top: 1.125rem;
  }
`;

export const NextBtn = styled.button<{ validate: boolean }>`
  width: calc(100% - 2.5rem);
  height: 4.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ validate }) => (validate ? 'var(--main)' : 'var(--disableBtn)')};
  color: var(--white);
  font-weight: 600;
  font-size: 1.25rem;
  border: none;
  position: absolute;
  bottom: 1.25rem;
`;
