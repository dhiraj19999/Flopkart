import {
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/adminProdReducer/adminProd.action";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const { allProducts } = useSelector((store) => store.adminProdReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log("allProducts:", allProducts);

  return (
    <Stack minH={"100vh"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Heading
        as="h4"
        size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
        textAlign="center"
        mb="10px"
      >
        Manage Products
      </Heading>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {allProducts?.map((prod) => (
          <ProductCard key={prod._id} product={prod} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default AllProducts;
