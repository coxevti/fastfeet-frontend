import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 36px;
  color: #999999;
  max-width: 237px;
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    left: 12px;
    top: 6px;
    transition: 0.3s;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #dddddd;
  padding-left: 40px;
  font-size: 14px;
  color: #999999;

  outline: none;
`;
