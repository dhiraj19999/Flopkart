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
import "./Cycling.css";
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
      "https://rukminim1.flixcart.com/image/200/200/kz8qsnk0/mosquito-net/h/1/p/double-bed-polyester-adults-blue-mosquito-net-double-bed-nets-original-imagbagfgnfvnquj.jpeg?q=70",
    brand: "Knight Ace",
    retail_price: 1299,
  },

  //Second image url
  {
    id: 2,
    image:
      "https://rukminim1.flixcart.com/image/200/200/k5e7o280/wall-clock/6/h/j/designer-wall-clock10-cw-ct-red25412-analog-ajanta-original-imafzyx3fdtf2hcb.jpeg?q=70",
    brand: "Mynte",
    retail_price: 1499,
  },
  {
    id: 3,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kz7bcsw0/artificial-plant/c/s/z/11-yes-4potss-ryme-original-imagb9zw4msbftaw.jpeg?q=70",
    brand: "Alisha",
    retail_price: 999,
  },
  {
    id: 4,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/hose-connector/b/q/b/1-2-brass-nozzle-water-spray-gun-hose-nozzles-pipe-for-gardening-original-imaghbm9jgx9vgxh.jpeg?q=70",
    brand: "Alisha",
    retail_price: 699,
  },
  {
    id: 5,
    image:
      "https://rukminim1.flixcart.com/image/200/200/ku79vgw0/cushion-pillow-cover/i/w/j/solid-satin-sugarchic-original-imag7dpsejfqefpn.jpeg?q=70",
    brand: "Mynte",
    retail_price: 1995,
  },
  {
    id: 6,
    image:
      "https://rukminim1.flixcart.com/image/200/200/jxxkvww0/bath-linen-set/h/y/h/p4-bathsports-gretea-heelium-original-imafg3zc8kfqzpza.jpeg?q=70",
    brand: "Mynte",
    retail_price: 2495,
  },
];

function Cycling() {
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
            Top Deals on Sports wears
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
                    <div className="slider10">
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

export default Cycling;
