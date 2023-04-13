import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton,Button, MenuList, MenuItem } from '@chakra-ui/react';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
       <MenuItem>Relevance</MenuItem>
       <MenuItem>Date added</MenuItem>
       <MenuItem>Name</MenuItem>
       <MenuItem>Realase date</MenuItem>
       <MenuItem>Popularity</MenuItem>
       <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector