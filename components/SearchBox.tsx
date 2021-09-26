import { FiSearch } from 'react-icons/fi';
import { PrimaryBtn } from './styled/Button';
import { InputField } from './styled/Input';
// internal imports
import { Container, Flex } from './styled/Layout';

const SearchBox = () => {
  return (
    <Container>
      <Flex>
        <FiSearch />
        <InputField />
        <PrimaryBtn>search</PrimaryBtn>
      </Flex>
    </Container>
  );
};

export default SearchBox;
