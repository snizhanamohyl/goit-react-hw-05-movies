import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewsListItem = styled.li`
  list-style: none;
  margin: 0;
  border: 1px solid #e8e8e8;
  /* box-shadow: 0px 0px 4px #e8e8e8; */
  padding: 12px 20px;
  border-radius: 12px 0 0 0;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const User = styled.p`
  font-weight: 500;
`;
