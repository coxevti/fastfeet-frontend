import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  border: 0;
  background: ${props => (props.color ? props.color : '#7d40e7')};
  padding: 9px 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 36px;
  width: 142px;
`;

export const Text = styled.h1`
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 5px;
  color: #fff;
  font-weight: bold;
`;
