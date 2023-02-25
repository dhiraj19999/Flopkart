import React from "react";

import logo from "../assets/Flopkart.jpg";

import { Box, Center, Flex, Hide, HStack, Image, Show } from "@chakra-ui/react";

import Searchbar from "./Searchbar";
import Menus from "./Menus";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

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
      zIndex="1000"
    >
      {/* Logo & search */}
      <HStack
        //  border={nav.border}
        w={{ base: "75%", md: "65%", lg: "45%" }}
      >
        <Link to="/">
          <Image src={logo} h="60px" cursor={"pointer"} />
        </Link>
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
        <Center>
          <Hamburger />
        </Center>
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
  px: { base: "2%", sm: "1%", md: "5%", lg: "6%" },
};
