import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
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
    img {
      width: 180px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
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
  a {
    color: #de3b3b;
    display: block;
  }
`;
