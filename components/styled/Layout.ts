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

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
  }
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
      padding: 0.2rem 5.5rem 0.2rem 2rem;
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

export const Card = styled.div`
  margin: 2rem 0;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.secondary};

  & > div > div > img {
    border-radius: 50%;
  }

  & > div > div > h2 {
    margin: 0;
  }

  & > div > div > p {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }

  & > div > p {
    color: ${({ theme }) => theme.colors.fontLight};
    font-weight: lighter;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    & > div > div {
      display: grid;
      place-items: center;
    }
  }
`;
