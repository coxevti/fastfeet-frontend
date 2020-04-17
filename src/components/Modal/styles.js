import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  background-color: #fff;
  width: 60%;
  height: auto;
  border-radius: 4px;
  padding: 25px;
  position: relative;
  button {
    background-color: transparent;
    position: absolute;
    top: -8px;
    right: 8px;
    border: 0;
    outline: 0;
    width: 32px;
    height: 32px;
    &::before,
    &::after {
      content: ' ';
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: #7d40e7;
    }
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }
`;
