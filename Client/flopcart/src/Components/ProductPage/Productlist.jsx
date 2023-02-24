import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/dataReducer/action";
import { ProductCard } from "./ProductCard";
import styles from "./Productlist.module.css";
export const Productlist = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { isLoading, products } = useSelector((store) => store.dataReducer);
  const [active, setActive] = useState("pop");
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
        <Text
          _active={{ color: "blue" }}
          onClick={() => setActive("pop")}
          color={`${active == "pop" ? "#2874F0" : ""}`}
          fontWeight={`${active == "pop" ? "500" : ""}`}
          borderBottom={`${active == "pop" ? "2px solid #2874F0" : ""}`}
          paddingBottom="5px"
          cursor={"pointer"}
        >
          Popularity
        </Text>
        <Text
          onClick={() => setActive("low")}
          color={`${active == "low" ? "#2874F0" : ""}`}
          fontWeight={`${active == "low" ? "500" : ""}`}
          borderBottom={`${active == "low" ? "2px solid #2874F0" : ""}`}
          paddingBottom="5px"
          cursor={"pointer"}
        >
          Price --Low to high
        </Text>
        <Text
          onClick={() => setActive("high")}
          color={`${active == "high" ? "#2874F0" : ""}`}
          fontWeight={`${active == "high" ? "500" : ""}`}
          borderBottom={`${active == "high" ? "2px solid #2874F0" : ""}`}
          paddingBottom="5px"
          cursor={"pointer"}
        >
          Price --High to low
        </Text>
      </div>
      <div className={styles.products_box}>
        {products?.map((el, i) => {
          return <ProductCard {...el} key={i} />;
        })}
      </div>
    </div>
  );
};
