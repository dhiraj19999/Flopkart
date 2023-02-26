import React from "react";
import {
  Box,
  Button,
  Image,
  Img,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Kurta.css";
import { Link } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    id: 1,
    image:
      "http://img6a.flixcart.com/image/kurta/u/q/v/vnku004385-maroon-vishudh-xxl-original-imaehdjtwmge7azh.jpeg",
    brand: "Vishudh",
    retail_price: 999,
  },

  //Second image url
  {
    id: 2,
    image:
      "http://img6a.flixcart.com/image/kurta/q/d/m/2422-beige-libas-xxl-original-imaegfjeybmdzcfy.jpeg",
    brand: "Libas",
    retail_price: 1849,
  },
  {
    id: 3,
    image:
      "http://img5a.flixcart.com/image/kurta/s/c/g/vnku004370-pink-olive-vishudh-xxl-original-imaehdjsyzzfv6rj.jpeg",
    brand: "Vishudh",
    retail_price: 899,
  },
  {
    id: 4,
    image:
      "http://img6a.flixcart.com/image/kurta/6/f/e/m001pcotsearain-masara-m-original-imaeheqbtkykajsx.jpeg",
    brand: "MASARA",
    retail_price: 1399,
  },
  {
    id: 5,
    image:
      "http://img5a.flixcart.com/image/kurta/m/u/z/nw-0012-noor-xl-original-imaehfjzbzg9yhup.jpeg",
    brand: "NOOR",
    retail_price: 1649,
  },
  {
    id: 6,
    image:
      "http://img5a.flixcart.com/image/kurta/9/a/g/lm015-love-more-4xl-original-imaegnvhyqhqcu2y.jpeg",
    brand: "Love More",
    retail_price: 1570,
  },
  {
    id: 7,
    image:
      "http://img5a.flixcart.com/image/kurta/r/w/v/lm007-love-more-3xl-original-imaegnv3786wvhva.jpeg",
    brand: "Love More",
    retail_price: 2100,
  },
  {
    id: 8,
    image:
      "http://img6a.flixcart.com/image/kurta/s/h/f/2438-red-libas-l-original-imaegfjeygyapnsr.jpeg",
    brand: "Libas",
    retail_price: 899,
  },
];

function Kurta() {
  return (
    <div>
      <Box
        display={"flex"}
        mt="30px"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        bg="white"
      >
        <Stack
          justifyContent={"space-between"}
          width="25%"
          m="auto"
          textAlign={"center"}
          className="dealsBox"
        >
          <Text
            paddingTop={{ base: "120px", md: "120px", lg: "40px" }}
            fontSize={{ base: "10px", md: "20px", lg: "30px" }}
          >
            Fashion for women
          </Text>

          <WrapItem pt="30px">
            <Button
              fontSize={{ base: "6px", md: "9px", lg: "12px" }}
              m={"auto"}
              colorScheme="messenger"
            >
              VIEW ALL
            </Button>
          </WrapItem>
          <Img
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/31d46a8fd93eeedd.jpg?q=90"
            alt="fg"
            width={"100%"}
          />
        </Stack>
        <Box
          w={{ base: "80%", md: "75%", lg: "84%" }}
          m="auto"
          className="OffSlider"
          h="300px"
        >
          <div className="parent">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              {sliderImageUrl.map((imageUrl, index) => {
                return (
                  <Link to="/products/women">
                    <div className="slider" key={index}>
                      <div className="slider6">
                        <Image
                          src={imageUrl.image}
                          alt="movie"
                          height={"200px"}
                          objectFit="contain"
                          width={"100%"}
                          _hover={{
                            transform: "scale(1.1)",
                            transition: "400ms",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          margin: "auto",
                          marginTop: "10px",
                          textAlign: "center",
                        }}
                      >
                        <Text color={"#388e3c"}>{imageUrl.brand}</Text>
                        <Text color={"#A9A9A9"}>
                          From ₹{imageUrl.retail_price}
                        </Text>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Kurta;
