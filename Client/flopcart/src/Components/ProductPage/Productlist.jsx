import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/dataReducer/action";
import { ProductCard } from "./ProductCard";
import styles from "./Productlist.module.css";
export const Productlist = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { isLoading, products } = useSelector((store) => store.dataReducer);
  useEffect(() => {
    dispatch(getData(name));
    console.log(products);
  }, [name]);

  return (
    <div className={styles.product_container}>
      <Text fontWeight={"500"} fontSize={"xl"} margin="10px" marginTop={"25px"}>
        Products Related to {name}{" "}
        <Text as={"span"} fontSize="sm" color={"gray.600"} fontWeight="400">
          ( showing - {products?.length} items )
        </Text>
      </Text>
      <div className={styles.sort_container}>
        <Text fontWeight={"500"}>Sort By</Text>
        <Text>Popularity</Text>
        <Text>Price --Low to high</Text>
        <Text>Price --High to low</Text>
      </div>

      {products?.map((el) => {
        return <ProductCard {...el} />;
      })}
    </div>
  );
};
