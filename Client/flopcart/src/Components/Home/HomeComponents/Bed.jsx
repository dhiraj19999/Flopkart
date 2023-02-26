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
import "./Bed.css";
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
      "http://img6a.flixcart.com/image/sofa-bed/j/f/y/fhd112-double-foam-fabhomedecor-leatherette-black-leatherette-1100x1100-imaeh3gemjjcg9ta.jpeg",
    brand: "FabHomeDecor",
    retail_price: 32157,
  },

  //Second image url
  {
    id: 2,
    image:
      "http://img6a.flixcart.com/image/bedsheet/d/r/8/goldbedi-81-santosh-royal-fashion-flat-gold-design-royal-cotton-1100x1100-imaejqxsmby6afqw.jpeg",
    brand: "SANTOSH ROYAL FASHION",
    retail_price: 2699,
  },
  {
    id: 3,
    image:
      "http://img6a.flixcart.com/image/bedsheet/w/q/u/jaipur117-jaipur-print-flat-jaipur117-original-imaejfv5fzysgpfy.jpeg",
    brand: "Jaipur Print",
    retail_price: 2599,
  },
  {
    id: 4,
    image:
      "http://img5a.flixcart.com/image/bedsheet/s/j/f/ahmd11-jaipur-print-flat-ahmd11-original-imaegsgckwx58eby.jpeg",
    brand: "Jaipur Print",
    retail_price: 2599,
  },
  {
    id: 5,
    image:
      "http://img6a.flixcart.com/image/sofa-bed/j/6/q/fhd115-double-foam-fabhomedecor-dark-brown-dark-brown-original-imaeh3gee5zcazvm.jpeg",
    brand: "FabHomeDecor",
    retail_price: 32157,
  },
  {
    id: 6,
    image:
      "http://img6a.flixcart.com/image/pillow/g/c/s/3drfiljdx-5-45x60-jdx-jdx-premium-3d-reliance-fibre-very-soft-1100x1100-imae4a5gf8bwvgcz.jpeg",
    brand: "JDX",
    retail_price: 5299,
  },
  {
    id: 7,
    image:
      "http://img6a.flixcart.com/image/showpiece-figurine/t/u/r/cml401-k-p-original-imaehgs9tykmb32g.jpeg",
    brand: "K&P",
    retail_price: 3579,
  },
];

function Bed() {
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
            Top Deals on Home Decors
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
                    <div className="slider9">
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

export default Bed;
