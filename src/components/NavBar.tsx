import { HStack, Image, Show, useColorMode } from "@chakra-ui/react";
import smallLogo from "../assets/small-logo.svg";
import darkLogo from "../assets/dark-logo.svg";
import lightLogo from "../assets/light-logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <HStack py="25px" mb={30} gap="20px">
      <Show below="lg">
        <Image src={smallLogo} />
      </Show>
      <Show above="lg">
        <Image src={colorMode === "dark" ? darkLogo : lightLogo} />
      </Show>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
