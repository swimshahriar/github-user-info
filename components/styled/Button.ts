import styled from 'styled-components';

export const ButtonTr = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.font};
  font-size: large;
  cursor: pointer;
`;

export const PrimaryBtn = styled.button`
  padding: 0.5rem;
  outline: none;
  border: 0.5rem;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.colors.primary};
  color: ${'#fff !important'};
`;
