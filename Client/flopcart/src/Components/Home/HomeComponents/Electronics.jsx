import React from "react";
import { Box, Button, Image, Img, Text, WrapItem } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./fashion.css";
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
    breakpoint: { max: 767, min: 374 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    id: 1,
    image:
      "http://img5a.flixcart.com/image/usb-gadget/b/x/b/portable-1024-jrb-original-imaejgwyededybzp.jpeg",
    brand: "JRB",
    retail_price: 499,
  },
  {
    id: 2,
    image:
      "http://img5a.flixcart.com/image/speaker/mobile-tablet-speaker/k/8/m/shortkut-enterprises-model-no-493-original-imae6hpde2qezbxf.jpeg",
    brand: "Shortkut enterprises",
    retail_price: 1200,
  },
  {
    id: 3,
    image:
      "http://img5a.flixcart.com/image/speaker/mobile-tablet-speaker/j/e/v/shortkut-enterprises-model-no-498-original-imaeggfqkhmyys9y.jpeg",
    brand: "Shortkut enterprises",
    retail_price: 1200,
  },
  //Second image url
  {
    id: 4,
    image:
      "http://img5a.flixcart.com/image/speaker/mobile-tablet-speaker/m/d/x/shortkut-enterprises-model-no-485-1100x1100-imaed2xjdgkfy5sh.jpeg",
    brand: "Shortkut enterprises",
    retail_price: 1200,
  },
  {
    id: 5,
    image:
      "http://img5a.flixcart.com/image/usb-gadget/b/x/b/portable-1024-jrb-original-imaejgwyededybzp.jpeg",
    brand: "JRB",
    retail_price: 499,
  },
  {
    id: 6,
    image:
      "http://img5a.flixcart.com/image/speaker/mobile-tablet-speaker/m/d/x/shortkut-enterprises-model-no-485-1100x1100-imaed2xjdgkfy5sh.jpeg",
    brand: "Shortkut enterprises",
    retail_price: 1200,
  },
  {
    id: 7,
    image:
      "http://img5a.flixcart.com/image/speaker/mobile-tablet-speaker/t/d/v/shortkut-enterprises-model-no-467-1100x1100-imaeggahdjzcbmj4.jpeg",
    brand: "Shortkut enterprises",
    retail_price: 1200,
  },
];

function Electronics() {
  return (
    <div>
      <Box
        display={"flex"}
        mt="20px"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        p="1"
        bg="white"
      >
        <Box
          width="25%"
          h="300px"
          m="auto"
          textAlign={"center"}
          className="dealsBox"
        >
          <Text
            paddingTop={{ base: "120px", md: "120px", lg: "40px" }}
            fontSize={{ base: "10px", md: "20px", lg: "30px" }}
          >
            {" "}
            Best Of Electronics
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
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            alt="fg"
            width={"100%"}
          />
        </Box>
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
                  <Link to="/products/mobile">
                    <div className="slider" key={index}>
                      <div className="slider1">
                        <Image
                          src={imageUrl.image}
                          alt="movie"
                          objectFit={"contain"}
                          height={"200px"}
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
                        <Text color="#A9A9A9">
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

export default Electronics;
