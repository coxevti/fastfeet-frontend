import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const PerPage = styled.select`
  background: transparent;
  border: 0;
  outline: none;
  color: #444444;
  padding: 5px 8px;
  box-shadow: none;
  font-size: 16px;
`;

export const Detail = styled.h1`
  color: #444444;
  font-size: 16px;
`;

export const Navigation = styled.div`
  button {
    color: #444444;
    background: transparent;
    border: 0;
  }
`;
