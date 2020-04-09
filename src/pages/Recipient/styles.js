import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
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

export const HeaderRegister = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h1 {
    color: #444444;
    font-size: 24px;
    font-weight: bold;
  }
  div {
    display: flex;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #cccccc;
      border: 0;
      border-radius: 4px;
      color: #fff;
      padding: 9px 16px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      outline: none;
      svg {
        margin-right: 6px;
      }
    }
    button + button {
      margin-left: 16px;
      background: #7d40e7;
    }
  }
`;

export const Form = styled.form`
  background: #fff;
  margin-top: 28px;
  padding: 26px 30px;
  row-gap: 16px;
  column-gap: 30px;
  border-radius: 4px;
  @media (min-width: 765px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .full-width {
      grid-column: 1 / 4;
    }
  }
  @media (min-width: 531px) and (max-width: 764px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .full-width {
      grid-column: 1 / 3;
    }
  }
  @media (max-width: 530px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FormGroup = styled.div`
  h4 {
    margin-bottom: 10px;
    font-weight: bold;
    color: #444444;
    font-size: 14px;
  }
  span {
    display: flex;
    flex-direction: column;
    input {
      color: #808080;
      border: 1px solid #dddddd;
      border-radius: 4px;
      min-height: 38px;
      padding: 0px 8px;
      outline: none;
    }
  }
`;
