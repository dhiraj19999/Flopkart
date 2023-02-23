import React from "react";

import logo from "../assets/Flopkart.jpg";

import { Box, Flex, Hide, HStack, Image, Show } from "@chakra-ui/react";

import Searchbar from "./Searchbar";
import Menus from "./Menus";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <Flex
      // border={nav.border}
      bgColor={nav.bgColor}
      justifyContent={nav.justifyContent}
      alignItems={nav.alignItems}
      px={nav.px}
      pos="sticky"
      top="0"
      zIndex="1"
    >
      {/* Logo & search */}
      <HStack
        //  border={nav.border}
        w={{ base: "80%", md: "70%", lg: "45%" }}
      >
        <Image src={logo} h="60px" />
        <Hide breakpoint="(max-width: 310px)">
          <Searchbar />
        </Hide>
      </HStack>

      {/* Menus */}
      <Show breakpoint="(min-width: 990px)">
        <Box w={{ base: "60%", md: "50%", lg: "45%" }}>
          <Menus />
        </Box>
      </Show>

      {/* Hamburger */}
      <Hide breakpoint="(min-width: 990px)">
        <Box>
          <Hamburger />
        </Box>
      </Hide>
    </Flex>
  );
};

export default Navbar;

const nav = {
  border: "2px solid black",
  bgColor: "#2874f0",
  justifyContent: "space-around",
  alignItems: "center",
  px: { base: "0%", sm: "0%", md: "5%", lg: "6%" },
};
