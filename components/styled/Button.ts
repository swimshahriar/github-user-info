import styled from 'styled-components';

export const ButtonTr = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.font};
  font-size: large;
  cursor: pointer;
`;

export const PrimaryBtn = styled.button`
  padding: 0.5rem 0.8rem;
  border: 0.3rem;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.primary};
  color: ${'#fff !important'};
`;
