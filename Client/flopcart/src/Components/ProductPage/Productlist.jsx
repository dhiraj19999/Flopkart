import {
  Flex,
  Skeleton,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getData, getDataReq } from "../../redux/dataReducer/action";
import { ProductCard } from "./ProductCard";
import styles from "./Productlist.module.css";
export const Productlist = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { products } = useSelector((store) => store.dataReducer);
  const [active, setActive] = useState("pop");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(50);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    dispatch(getData(name));
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [name, dispatch]);

  const sortBylow = (q, p) => {
    setloading(true);
    setActive(p);
    dispatch(
      getData(name, {
        params: {
          sortBy: q,
        },
      })
    );
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  const pagination = (q) => {
    setloading(true);
    setPage(page + q);
    dispatch(
      getData(name, {
        params: {
          page: page,
        },
      })
    );
    setTimeout(() => {
      setloading(false);
    }, 2000);
    if (products.length == 0) {
      dispatch(getData(name));
    }
  };
  const paginationfordirectclick = (q) => {
    setloading(true);
    setPage(q);
    dispatch(
      getData(name, {
        params: {
          page: page,
        },
      })
    );
    setTimeout(() => {
      setloading(false);
    }, 2000);
    if (products.length == 0) {
      dispatch(getData(name));
    }
  };
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
          onClick={() => sortBylow("", "pop")}
          color={`${active == "pop" ? "#2874F0" : ""}`}
          fontWeight={`${active == "pop" ? "500" : ""}`}
          borderBottom={`${active == "pop" ? "2px solid #2874F0" : ""}`}
          paddingBottom="5px"
          cursor={"pointer"}
        >
          Popularity
        </Text>
        <Text
          onClick={() => sortBylow("asc", "low")}
          color={`${active == "low" ? "#2874F0" : ""}`}
          fontWeight={`${active == "low" ? "500" : ""}`}
          borderBottom={`${active == "low" ? "2px solid #2874F0" : ""}`}
          paddingBottom="5px"
          cursor={"pointer"}
        >
          Price --Low to high
        </Text>
        <Text
          onClick={() => sortBylow("desc", "high")}
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
          return !loading ? (
            <Link to={`/product/${el.uniq_id}`}>
              <ProductCard {...el} key={i} />
            </Link>
          ) : (
            <Stack>
              <Skeleton height="300px" />
              <Skeleton height="25px" />
              <Skeleton height="20px" />
              <Skeleton height="10px" />
            </Stack>
          );
        })}
      </div>
      <Flex justifyContent={"center"} alignItems="center">
        <Tabs p={"10px"}>
          <TabList borderBottom={0}>
            {page > 1 ? (
              <Text
                color={"#2874f0"}
                fontWeight="600"
                lineHeight="32px"
                p="0 25px"
                cursor={"pointer"}
                onClick={() => pagination(-1)}
              >
                PREVIOUS
              </Text>
            ) : (
              "        "
            )}

            {Array.from({ length: 4 }, (v, i) => i).map((item, i) => {
              return (
                <Tab
                  key={i}
                  cursor="pointer"
                  fontSize={"15px"}
                  _selected={{ bg: "", color: "" }}
                  bg={page === i + 1 ? "#2874f0" : ""}
                  color={page === i + 1 ? "#fff" : ""}
                  height={"32px"}
                  w="32px"
                  borderRadius={"50%"}
                  onClick={() => paginationfordirectclick(i + 1)}
                  fontWeight="500"
                >
                  {item + 1}
                </Tab>
              );
            })}

            {page < total / 10 - 1 ? (
              <Text
                color={"#2874f0"}
                fontWeight="600"
                lineHeight="32px"
                p="0 25px"
                cursor={"pointer"}
                onClick={() => pagination(1)}
              >
                NEXT
              </Text>
            ) : (
              "    "
            )}
          </TabList>
        </Tabs>
      </Flex>
    </div>
  );
};
