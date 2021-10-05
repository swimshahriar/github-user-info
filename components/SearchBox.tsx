import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { PrimaryBtn } from './styled/Button';
import { InputField } from './styled/Input';
// internal imports
import { Container, SearchContainer } from './styled/Layout';

interface PropType {
  username: string;
  setUsername: Function;
  searchHandler: Function;
  isLoading: boolean;
}

const SearchBox: React.FC<PropType> = ({
  username,
  setUsername,
  searchHandler,
  isLoading,
}) => {
  return (
    <Container>
      <SearchContainer>
        <FiSearch />
        <InputField
          placeholder="Github username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PrimaryBtn disabled={isLoading} onClick={() => searchHandler()}>
          search
        </PrimaryBtn>
      </SearchContainer>
    </Container>
  );
};

export default SearchBox;
