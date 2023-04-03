import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid #cfcfcf;

  &:hover {
    cursor: pointer;
  }
`;

export const Wrap = styled.div`
  padding: 20px;
`;
