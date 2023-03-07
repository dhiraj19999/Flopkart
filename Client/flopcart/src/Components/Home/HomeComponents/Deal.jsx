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
import "./deal.css";
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
      "https://rukminim1.flixcart.com/image/200/200/l23mhzk0/top/a/b/l/m-tttp006710-tokyo-talkies-original-imagdgg4gqpmdgm8.jpeg?q=70",
    brand: "Alisha",
    retail_price: 699,
  },
  {
    id: 2,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kn4xhu80/bra/x/c/3/lightly-padded-32e-no-regular-regular-br2213p08-clovia-original-imagfvnj3gmgqbxf.jpeg?q=70",
    brand: "Alisha",
    retail_price: 1199,
  },
  //Second image url
  {
    id: 3,
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/200/200/image/5aa98b7cee183286.jpg?q=70",
    brand: "Alisha",
    retail_price: 1000,
  },
  {
    id: 4,
    image:
      "https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70",
    brand: "Alisha",
    retail_price: 699,
  },
  {
    id: 5,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kpu3frk0/trouser/n/i/k/30-foilcombo9661-trend-level-original-imag3zggwyrwtbz9.jpeg?q=70",
    brand: "Alisha",
    retail_price: 1199,
  },
  {
    id: 6,
    image:
      "https://rukminim1.flixcart.com/image/200/200/joq2qa80/jacket/v/h/8/m-fmjk0610-flying-machine-original-imafb4944xejmphz.jpeg?q=70",
    brand: "Alisha",
    retail_price: 999,
  },
];

function Deal() {
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
            Top Offers on shorts
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
                    <div className="slider3">
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
                      <Text color="#388e3c">{imageUrl.brand}</Text>
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

export default Deal;
