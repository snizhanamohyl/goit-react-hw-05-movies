import styled from 'styled-components';

export const Form = styled.form`
  border: none;
  padding: 12px 20px;
  outline: none;
`;

export const Input = styled.input`
  border: 1px solid #cfcfcf;
  padding: 12px 20px;
  outline: none;
  border-radius: 4px 0 0 4px;
`;

export const Btn = styled.button`
  border: 1px solid #cfcfcf;
  padding: 12px 20px;
  outline: none;
  border-radius: 0 4px 4px 0;

  &:hover {
    cursor: pointer;
  }
`;
