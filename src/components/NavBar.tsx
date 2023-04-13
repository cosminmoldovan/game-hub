import { Flex, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import logoDark from "../assets/logo-dark.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props{
  onSearch: (searchText: string) => void;
}
const NavBar = ({onSearch}: Props) => {
  const { colorMode } = useColorMode();
  return (
    <HStack py="25px" mb={30}>
      <Image src={colorMode === "dark" ? logo : logoDark} boxSize={"40px"}/>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
