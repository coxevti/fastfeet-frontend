import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 360px;
  padding: 60px 35px;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  img {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    color: #444444;
    div {
      label {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 15px;
        input {
          margin-top: 10px;
          border-radius: 4px;
          padding: 10px 15px;
          border: 1px solid #dddddd;
          font-size: 0.9rem;
          height: 45px;
          &::placeholder {
            color: #999999;
          }
        }
      }
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;
      outline: 0;
      &:hover {
        background: ${darken(0.1, '#7D40E7')};
      }
    }
  }
`;
