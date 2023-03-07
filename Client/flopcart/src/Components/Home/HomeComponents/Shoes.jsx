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
import "./Shoes.css";
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
      "https://rukminim1.flixcart.com/image/200/200/kjuby4w0/deodorant/v/c/d/400-one8-intense-fresh-deo-pack-of-2-200ml-x-2-2-perfume-body-original-imafzbn4nv2zhccp.jpeg?q=70",
    brand: "Nuride",
    retail_price: 1999,
  },
  {
    id: 2,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kgv5x8w0/slipcover/v/f/v/sfc-29-onterio-fab-original-imafxyen34zmpde3.jpeg?q=70",
    brand: "ShoeBuzz",
    retail_price: 799,
  },
  //Second image url
  {
    id: 3,
    image:
      "https://rukminim1.flixcart.com/image/200/200/l2m78280/bedding-set/t/b/g/polycotton-bedding-set-queen-com-set-grey-bail-the-artsy-home-original-imagdxgdnpz7mzyq.jpeg?q=70",
    brand: "Glacier",
    retail_price: 629,
  },
  {
    id: 4,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kv9urgw0/air-freshener/y/w/j/150-double-ring-solar-car-perfumes-crystal-auto-rotate-car-original-imag87eny3n3rrzf.jpeg?q=70",
    brand: "Asics",
    retail_price: 9499,
  },
  {
    id: 5,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kuu4x3k0/candle/p/g/a/home-decor-deep-for-diwali-3d-shadow-reflection-floating-plastic-original-imag7vck9af6tnpc.jpeg?q=70",
    brand: "JQR",
    retail_price: 1299,
  },
  {
    id: 6,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/sweet-mithai/c/n/4/400-agra-petha-agra-famous-petha-sweet-dry-agra-peda-winter-original-imagkcbnhzh2vvbk.jpeg?q=70",
    brand: "JASPO",
    retail_price: 2299,
  },
];

function Shoes() {
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
            Top deals for footwears
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
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/59d58e5ce057f2e6.jpg?q=90"
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
                    <div className="slider2">
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

export default Shoes;
