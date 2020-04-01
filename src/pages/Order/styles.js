import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  padding: 20px;
  display: flex;
`;

export const Header = styled.div`
  width: 100%;
  > h1 {
    color: #444444;
    font-size: 24px;
    margin-bottom: 34px;
    font-weight: bold;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;
