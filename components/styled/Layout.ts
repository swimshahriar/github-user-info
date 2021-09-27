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
  position: relative;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ jc }: { jc?: string }) => jc || 'center'};
  align-items: center;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  position: relative;

  & > input {
    background: ${({ theme }) => theme.colors.secondary};
  }

  & > svg {
    position: absolute;
    top: 0.7rem;
    left: 0.5rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    z-index: 100;
  }

  & > button {
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    & > input {
      padding: .2rem 2rem;
      font-size: 1rem;
    }

    & > svg {
      font-size: 1.2rem;
      top: 1rem;
    }

    & > button {
      padding: 0.5rem;
    }
  }
`;
