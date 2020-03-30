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
  table {
    margin-top: 22px;
    width: 100%;
    display: table;
    border-collapse: separate;
    border-spacing: 0 15px;
    thead {
      color: #444444;
      display: table-header-group;
      font-weight: bold;

      font-size: 16px;
    }
    tbody {
      color: #666666;
      font-weight: normal;
      font-size: 16px;
      td.actions {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      td {
        background: #fff;
        vertical-align: middle;
        img {
          width: 35px;
          height: 35px;
          margin-right: 5px;
        }
        > div {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
      }
    }
    th,
    td {
      padding: 0.25rem;
      text-align: left;
    }
    td + td {
      height: 57px;
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
      padding: 3px 7px 3px 22px;
      font-weight: bold;
      text-align: center;
      font-size: 14px;
      position: relative;
    }
    .circle {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      top: 0;
      left: 0;
      margin-left: 6px;
      margin-top: 5px;
    }
  }
`;
