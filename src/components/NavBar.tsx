import { Flex, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import logoDark from "../assets/logo-dark.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const {colorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"} px={"30px"} py={"20px"}>
      <Flex gap={2} alignItems={'center'}>
        <Image src={colorMode === "dark" ? logo : logoDark} boxSize={"40px"} />
        <Text pt={3} fontWeight={'bold'}>GameHub</Text>
      </Flex>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
