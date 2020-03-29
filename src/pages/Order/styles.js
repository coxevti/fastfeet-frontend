import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
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
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  table {
    margin-top: 22px;
    width: 100%;
    display: table;
    border-collapse: separate;
    border-spacing: 0 15px;
    thead {
      color: #444444;
      display: table-header-group;
    }
    tbody {
      color: #666666;
      font-weight: normal;
      .deliveryAvatar {
        display: flex;
        align-items: center;
      }
      td {
        background: #fff;
        height: 57px;
        img {
          width: 35px;
          height: 35px;
          margin-right: 5px;
        }
      }
    }
    th,
    td {
      padding: 0.25rem;
      text-align: left;
    }
    tr > td:last-child,
    tr > th:last-child {
      text-align: center;
      border-radius: 0 4px 4px 0;
    }
    tr > td:first-child,
    tr > th:first-child {
      text-align: center;
      border-radius: 4px 0 0 4px;
    }
    .delivery {
      color: #2ca42b;
      background-color: #dff0df;
      .circle {
        background-color: #2ca42b;
      }
    }
    .pending {
      color: #c1bc35;
      background-color: #f0f0df;
      .circle {
        background-color: #c1bc35;
      }
    }
    .removed {
      color: #4d85ee;
      background-color: #bad2ff;
      .circle {
        background-color: #4d85ee;
      }
    }
    .cancelled {
      color: #de3b3b;
      background-color: #fab0b0;
      .circle {
        background-color: #de3b3b;
      }
    }
    .badge {
      border-radius: 12px;
      padding: 2px 5px 2px 20px;
      font-weight: bold;
      text-align: center;
      position: relative;
    }
    .circle {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      top: 0;
      left: 0;
      margin-left: 5px;
      margin-top: 4px;
    }
    .actions {
      position: relative;
      z-index: 2;
      button {
        background: none;
        border: 0;
        position: relative;
      }
      div {
        position: absolute;
        width: 160px;
        left: calc(50% - 80px);
        top: calc(100% - 10px);
        background: #fff;
        border-radius: 4px;
        padding: 15px 5px;
        display: block;
        border: 1px solid #00000026;
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
            button {
              display: flex;
              align-items: center;
              color: #999999;
            }
          }
          li + li {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #00000026;
          }
        }
      }
    }
  }
`;
