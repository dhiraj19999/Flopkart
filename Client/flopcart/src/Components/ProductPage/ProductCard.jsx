import React from "react";
import styles from "./ProductCard.module.css";
import { AiFillHeart } from "react-icons/ai";
import { Flex, Image, Text } from "@chakra-ui/react";
export const ProductCard = ({
  image,
  product_name,
  retail_price,
  discounted_price,
  product_category_tree,
  product_rating,
}) => {
  const img = JSON.parse(image);
  const dis_percenatge = Math.ceil((discounted_price / retail_price) * 100);
  return (
    <div className={styles.product_card}>
      <Flex position={"absolute"} top="10px" right={"10px"} zIndex="4">
        <AiFillHeart color="gray" fontSize={"24px"} />
      </Flex>
      <div className={styles.figure}>
        <Image
          src={img[0]}
          className={styles.image_main}
          alt="img-1"
          position={"relative"}
          width={"100%"}
          objectFit={"contain"}
          overflow="hidden"
        />
        <Image
          src={img[1] || img[0]}
          position="absolute"
          top={"0px"}
          className={styles.image_hover}
          alt="img-1"
          width={"100%"}
          objectFit={"cover"}
          overflow="hidden"
        />
      </div>

      <Text
        textOverflow={"ellipsis"}
        overflow="hidden"
        marginLeft={"10px"}
        className={styles.pro_name}
      >
        {product_name}
      </Text>
      <Flex gap="17px" marginLeft={"10px"} marginTop="4px" marginBottom="4px">
        <Text fontSize={"sm"}>{product_rating}</Text>
        <Image
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
          className={styles.flk_assured}
        />
      </Flex>
      <Text marginLeft={"10px"} color="blackAlpha.900" fontWeight={"500"}>
        ₹{retail_price - discounted_price}{" "}
        <Text
          as="span"
          textDecoration={"line-through"}
          textDecorationColor="gray.500"
          color="gray.500"
          fontWeight={"400"}
          marginLeft="4px"
        >
          {" "}
          ₹{retail_price}
          {"   "}
        </Text>
        <Text as="span" color={"#388E3C"} marginLeft="4px">
          {dis_percenatge}% off
        </Text>
      </Text>
      <Text fontSize={"xs"} marginLeft="10px">
        {" "}
        Free Delivery
      </Text>
      <Text marginLeft={"10px"}>
        Upto{" "}
        <Text as="span" fontWeight={"500"}>
          ₹200
        </Text>{" "}
        Off on Exchange
      </Text>
    </div>
  );
};
