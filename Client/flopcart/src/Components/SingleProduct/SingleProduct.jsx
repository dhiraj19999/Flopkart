import { Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleProduct.module.css";
export const SingleProduc = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = () => {
    return axios
      .get(`https://drab-pants-bass.cyclic.app/products/${id}`)
      .then((re) => setData(re.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.single_container}>
      <div className={styles.single_img}></div>
      <div className={styles.singlecard_detail}>
        <Text fontSize={"xs"} fontWeight="500" color={"gray.500"}>
          {data[0]?.product_category_tree}
        </Text>
        <Text fontSize={"x-large"}>{data[0]?.product_name}</Text>
        <Flex gap="17px" marginTop="4px" marginBottom="4px">
          <Text fontSize={"sm"}>{data[0]?.product_rating}</Text>
          <Image
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            className={styles.flk_assured}
            width="10%"
          />
        </Flex>
        <Text fontWeight={"500"} color="#388e3c">
          Special Price
        </Text>
        <Text fontSize={"3xl"} fontWeight="500">
          ₹{data[0]?.discounted_price}
          <Text
            as="span"
            fontSize={"sm"}
            fontWeight="500"
            color={"gray.500"}
            textDecoration="line-through"
            textDecorationColor={"gray.500"}
            marginLeft="5px"
          >
            {"  "}₹{data[0]?.retail_price}
          </Text>
          <Text as="span" fontSize={"xl"} color="#388e3c" marginLeft={"10px"}>
            {Math.ceil(
              ((data[0]?.retail_price - data[0]?.discounted_price) /
                data[0]?.retail_price) *
                100
            )}
            %
          </Text>
        </Text>
      </div>
    </div>
  );
};
