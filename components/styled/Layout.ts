import styled from 'styled-components';

export const MainContaienr = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ jc }: { jc?: string }) => jc || 'center'};
  align-items: center;
  gap: 1rem;
`;
