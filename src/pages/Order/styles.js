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
      outline: none;
    }
  }
`;

export const Form = styled.form`
  background: #fff;
  margin-top: 28px;
  padding: 26px 30px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;
  column-gap: 30px;
  .full-width {
    grid-column: 1 / 3;
    span {
      display: flex;
      flex-direction: column;
      input {
        color: #808080;
        border: 1px solid #cccccc;
        border-radius: 4px;
        min-height: 38px;
        padding: 0px 8px;
        outline: none;
      }
    }
  }
`;

export const FormGroup = styled.div`
  h4 {
    margin-bottom: 10px;
    font-weight: bold;
    color: #444444;
    font-size: 14px;
  }
`;

export const Box = styled.div`
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 12px;
  padding-bottom: 12px;
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  h2 {
    color: #444444;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
  }
  p {
    line-height: 26px;
    font-size: 16px;
    span {
      font-weight: bold;
      color: #666666;
    }
  }
  div {
    margin-top: 23px;
    display: grid;
    place-items: center;
    img {
      width: 60%;
      height: auto;
      max-height: 200px;
    }
  }
`;
