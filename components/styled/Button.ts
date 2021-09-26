import styled from 'styled-components';

export const ButtonTr = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.font};
  font-size: large;
  cursor: pointer;
`;
