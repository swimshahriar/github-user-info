import styled from 'styled-components';

export const InputField = styled.input`
  position: relative;
  width: 100%;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem 6.5rem 0.2rem 2.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.font};
`;
