import { Divider, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleProduct.module.css";
export const SingleProduc = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [view, setView] = useState("noview");
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
        <Text fontWeight={"500"}>Available offers</Text>
        <div className={styles.offers}>
          <Flex>
            <Image
              src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
              width={"3%"}
            />
            <Text>
              <Text as="span" fontWeight={"500"} marginLeft="10px">
                Bank Offer {"  "}
              </Text>
              10% instant discount on PNB Credit Card, up to ₹1500, on orders of
              ₹5,000 and above
              <Text
                as="span"
                fontWeight={"500"}
                marginRight="10px"
                color={"#2874F0"}
              >
                T&C
              </Text>
            </Text>
          </Flex>

          <Flex>
            <Image
              src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
              width={"3%"}
            />
            <Text>
              <Text as="span" fontWeight={"500"} marginLeft="10px">
                Bank Offer {"  "}
              </Text>
              10% off on Yes Bank Credit Card and EMI Transactions, up to
              ₹1,500. On orders of ₹10,000 and above
              <Text
                as="span"
                fontWeight={"500"}
                marginRight="10px"
                color={"#2874F0"}
              >
                T&C
              </Text>
            </Text>
          </Flex>

          <Flex>
            <Image
              src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
              width={"3%"}
            />
            <Text>
              <Text as="span" fontWeight={"500"} marginLeft="10px">
                Bank Offer {"  "}
              </Text>
              Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000.
              Valid once per Paytm account
              <Text
                as="span"
                fontWeight={"500"}
                marginRight="10px"
                color={"#2874F0"}
              >
                T&C
              </Text>
            </Text>
          </Flex>

          <Flex>
            <Image
              src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
              width={"3%"}
            />
            <Text marginLeft={"10px"}>
              Buy for 5 get ₹500 off your Next Buy
              <Text
                as="span"
                fontWeight={"500"}
                marginRight="10px"
                color={"#2874F0"}
              >
                T&C
              </Text>
            </Text>
          </Flex>
          <Text
            color={"#2874F0"}
            fontWeight="500"
            cursor={"pointer"}
            onClick={() => setView("view")}
            display={view == "noview" ? "" : "none"}
          >
            View 8 more offers
          </Text>
          <Stack display={view == "view" ? "" : "none"} overflow="hidden">
            <Flex>
              <Image
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width={"3%"}
              />
              <Text>
                <Text as="span" fontWeight={"500"} marginLeft="10px">
                  Partner Offer {"  "}
                </Text>
                Sign up for Flipkart Pay Later and get Flipkart Gift Card worth
                up to ₹500*
                <Text
                  as="span"
                  fontWeight={"500"}
                  marginRight="10px"
                  color={"#2874F0"}
                >
                  Know More
                </Text>
              </Text>
            </Flex>

            <Flex>
              <Image
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width={"3%"}
              />
              <Text>
                <Text as="span" fontWeight={"500"} marginLeft="10px">
                  Combo Offer {"  "}
                </Text>
                Buy 3 items save 3%; Buy 4 save 4%; Buy 5+ save 5%
                <Text
                  as="span"
                  fontWeight={"500"}
                  marginRight="10px"
                  color={"#2874F0"}
                >
                  See all products T&C
                </Text>
              </Text>
            </Flex>

            <Flex>
              <Image
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width={"3%"}
              />
              <Text>
                <Text as="span" fontWeight={"500"} marginLeft="10px">
                  Special Price {"  "}
                </Text>
                Get extra 4% off (price inclusive of cashback/coupon)
                <Text
                  as="span"
                  fontWeight={"500"}
                  marginRight="10px"
                  color={"#2874F0"}
                >
                  T&C
                </Text>
              </Text>
            </Flex>

            <Flex>
              <Image
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
                width={"3%"}
              />
              <Text>
                <Text as="span" fontWeight={"500"} marginLeft="10px">
                  No cost EMI ₹1,167/month
                </Text>
                Standard EMI also available
                <Text
                  as="span"
                  fontWeight={"500"}
                  marginRight="10px"
                  color={"#2874F0"}
                >
                  View Plans
                </Text>
              </Text>
            </Flex>

            <Flex>
              <Image
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width={"3%"}
              />
              <Text>
                <Text as="span" fontWeight={"500"} marginLeft="10px">
                  Partner Offer {"  "}
                </Text>
                Buy this product and get upto ₹500 off on Flipkart Furniture
                <Text
                  as="span"
                  fontWeight={"500"}
                  marginRight="10px"
                  color={"#2874F0"}
                >
                  T&C
                </Text>
              </Text>
            </Flex>

            <Flex>
              <Image
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width={"3%"}
              />
              <Text>
                <Text as="span" fontWeight={"500"} marginLeft="10px">
                  Partner Offer {"  "}
                </Text>
                Claim 2500+ free expert-curated printable learning worksheets
                with HP Printers
                <Text
                  as="span"
                  fontWeight={"500"}
                  marginRight="10px"
                  color={"#2874F0"}
                >
                  Know More
                </Text>
              </Text>
            </Flex>

            <Flex>
              <Image
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width={"3%"}
              />
              <Text>
                <Text as="span" fontWeight={"500"} marginLeft="10px">
                  Partner Offer {"  "}
                </Text>
                Purchase now & get a surprise cashback coupon till November 2023
                <Text
                  as="span"
                  fontWeight={"500"}
                  marginRight="10px"
                  color={"#2874F0"}
                >
                  Know More
                </Text>
              </Text>
            </Flex>
          </Stack>
        </div>
        <Image
          src="https://assets.mspimages.in/wp-content/uploads/2021/01/Flipkart-SuperCoin.png"
          width={"40%"}
        />
        <Flex
          border={"1px solid #D3D3D3"}
          padding="10px"
          gap={"15px"}
          margin="10px 10px 10px 0px"
          overflow={"hidden"}
        >
          <Text fontWeight={"500"} color="gray.500">
            Description
          </Text>
          <VStack border={"0.5px solid #D3D3D3"}></VStack>
          <Text>{data[0]?.description}</Text>
        </Flex>
      </div>
    </div>
  );
};
