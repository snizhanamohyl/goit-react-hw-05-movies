import styled from 'styled-components';

export const CastList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 12px;
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 0px 8px #e8e8e8;
  border-radius: 8px;
`;

export const Name = styled.p`
  margin: 12px 0 4px 0;
  font-weight: 700;
`;

export const Photo = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const Character = styled.p`
  margin: 0;
  color: grey;
`;
