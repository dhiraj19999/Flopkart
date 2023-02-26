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
import "./Kids.css";
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
      "http://img6a.flixcart.com/image/sweater/c/h/5/4001-grey-superkids-26-original-imaeap84grujmwzz.jpeg",
    brand: "Super Kids",
    retail_price: 825,
  },

  //Second image url
  {
    id: 2,
    image:
      "http://img6a.flixcart.com/image/backpack/p/n/3/twity-face-bag-multicolor-pandora-backpack-kids-school-bag-twity-1000x1000-imaehc4xn9qxffhw.jpeg",
    brand: "Pandora",
    retail_price: 799,
  },
  {
    id: 3,
    image:
      "http://img6a.flixcart.com/image/mosquito-net/b/z/k/cvpc021-chinmay-kids-printed-cotton-padded-1100x1100-imaee82ggwrudusk.jpeg",
    brand: "CHINMAY KIDS",
    retail_price: 1490,
  },
  {
    id: 4,
    image:
      "http://img5a.flixcart.com/image/backpack/p/n/3/twity-face-bag-multicolor-pandora-backpack-kids-school-bag-twity-original-imaehc5yhttfjak8.jpeg",
    brand: "Pandora",
    retail_price: 799,
  },
  {
    id: 5,
    image:
      "http://img5a.flixcart.com/image/lunch-box/n/s/m/gayatri-creations-orange-kids-set-original-imaehh3e5v69z5cg.jpeg",
    brand: "GAYATRI CREATIONS",
    retail_price: 695,
  },
];

function Kids() {
  return (
    <div>
      <Box
        display={"flex"}
        mt="30px"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        bg="white"
      >
        <Stack
          width="25%"
          m="auto"
          justifyContent="space-between"
          textAlign={"center"}
          className="dealsBox"
        >
          <Text
            paddingTop={{ base: "120px", md: "120px", lg: "40px" }}
            fontSize={{ base: "10px", md: "20px", lg: "30px" }}
          >
            Fashion Top Deals
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
                  <div className="slider" key={index}>
                    <div className="slider7">
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
                      <Text color="#A9A9A9">From ₹{imageUrl.retail_price}</Text>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Kids;
