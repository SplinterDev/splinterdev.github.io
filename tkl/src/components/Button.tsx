import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;
