import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  color: #c6c6c6;
  outline: 0;
`;

export const ActionList = styled.div`
  position: absolute;
  z-index: 2;
  width: 150px;
  left: calc(50% - 81px);
  top: calc(100% + 5px);
  background: #fff;
  border-radius: 4px;
  border: 1px solid #00000026;
  display: ${props => (props.visible ? 'block' : 'none')} !important;
  margin-bottom: 10px;
  &::before {
    content: '';
    background: #fff;
    position: absolute;
    width: 20px;
    height: 20px;
    transform: rotate(-45deg);
    border-top-right-radius: 5px;
    top: -11px;
    left: 70px;
    border-right: 1px solid #00000026;
    border-top: 1px solid #00000026;
  }
  ul {
    width: 100%;
    padding: 15px 0;
    .view {
      color: #8e5be8;
    }
    .edit {
      color: #4d85ee;
    }
    .delete {
      color: #de3b3b;
    }
    li {
      padding: 0 20px;
      svg {
        margin-right: 10px;
      }
      a {
        display: flex;
        align-items: center;
        color: #999999;
        font-size: 14px;
        margin-left: 6px;
      }
      button {
        display: flex;
        align-items: center;

        justify-content: center;
        color: #999999;
        background: transparent;
        border: 0;
        outline: 0;
      }
    }
    li + li {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #00000026;
    }
  }
`;
