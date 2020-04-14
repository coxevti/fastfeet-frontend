import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid #dddddd;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    svg {
      display: none;
    }
    img {
      width: 180px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #dddddd;
    }
    a {
      font-weight: bold;
      color: #999999;
      text-transform: uppercase;
      font-size: 15px;
    }
    a + a {
      margin-left: 20px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
  .active {
    color: #444444;
  }
  @media all and (max-width: 850px) {
    nav {
      a {
        display: none;
      }
      svg {
        display: block;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #999999;
  line-height: 26px;
  strong {
    display: block;
    color: #666666;
    letter-spacing: 0;
  }
  button {
    color: #de3b3b;
    display: block;
    background-color: transparent;
    border: 0;
    outline: 0;
  }
`;
