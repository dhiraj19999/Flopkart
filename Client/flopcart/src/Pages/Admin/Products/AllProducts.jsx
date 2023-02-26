import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const AllProducts = () => {
  return (
    <Flex
      minH={"100vh"}
      justify={"center"}
      // align={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Heading as="h4" size="sm">
        All Products
      </Heading>
    </Flex>
  );
};

export default AllProducts;
