import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid #e8e8e8;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active {
    color: orange;
    font-weight: 500;
  }
`;

export const HeaderWrap = styled.header`
  padding: 20px 20px;
  font-size: 18px;
  box-shadow: 0 4px 2px -2px #e8e8e8;
`;
