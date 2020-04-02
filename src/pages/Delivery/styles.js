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

export const Avatar = styled.div`
  align-self: center;
  margin-bottom: 30px;
  label {
    cursor: pointer;
    position: relative;
    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
    }
    .notAvatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #dddddd;
      font-weight: bold;
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 1px dashed #dddddd;
    }
    input {
      display: none;
    }
  }
`;

export const Form = styled.form`
  background: #fff;
  margin-top: 28px;
  padding: 26px 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  div + div {
    margin-top: 18px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin-bottom: 10px;
    font-weight: bold;
    color: #444444;
    font-size: 14px;
  }
  input {
    color: #808080;
    border: 1px solid #cccccc;
    border-radius: 4px;
    min-height: 38px;
    padding: 0px 8px;
    outline: none;
  }
`;
