import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import {SearchIcon} from '@chakra-ui/icons'
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<SearchIcon color="#898989" />} />
        <Input
          focusBorderColor="rgba(100,100,100, 0.5)"
          ref={searchRef}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
