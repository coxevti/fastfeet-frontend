import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
      --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        -webkit-font-smoothing: antialiased !important;
        height: 100vh;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    html, body, #root {
        width: 100%;
        height: 100vh;
        color: #999;
        background: #f5f5f5;
    }
    body, input, button {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }
    table {
    margin-top: 22px;
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
