import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Spinner = styled.img`
  width: 100px;
  height: 100px;
  animation: ${rotate360} 2s linear infinite;
`;

export const Text = styled.h1`
  color: rgba(255, 255, 255, 0.7);
  padding-top: 10px;
`;
