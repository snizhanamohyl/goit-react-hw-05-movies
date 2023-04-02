import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active {
    color: orange;
  }
`;
