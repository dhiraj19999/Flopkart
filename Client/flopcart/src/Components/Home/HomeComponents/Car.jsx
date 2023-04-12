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
import "./Car.css";
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
      "https://rukminim1.flixcart.com/image/200/200/xif0q/shopsy-shoe/w/8/9/8-21212-nobelite-black-original-imagj5wbvszbetnz.jpeg?q=70",
    brand: "Roadster",
    retail_price: 1399,
  },

  //Second image url
  {
    id: 2,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kqpj4i80/slipper-flip-flop/c/a/v/8-ff-375gr-375bk-footup-multicolor-6-original-imag4nqku8yc5rnd.jpeg?q=70",
    brand: "Men's Cargos",
    retail_price: 750,
  },
  {
    id: 3,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/t-shirt/n/d/h/xxl-ausk0156-ausk-original-imaghr28nuqhbza8.jpeg?q=70",
    brand: "Caron Watch",
    retail_price: 1200,
  },
  {
    id: 4,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/anklet/j/k/7/na-na-2-090-drama-queen-fashion-original-imaghpsm2afabug8.jpeg?q=70",
    brand: "Men's Cargos",
    retail_price: 1765,
  },
  {
    id: 5,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kybvo280/kurta/z/l/9/xl-plain-m-white-kurta-ruhi-fashion-original-imagahyyue82qxph.jpeg?q=70",
    brand: "Men's Cargos",
    retail_price: 1699,
  },
  {
    id: 6,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/sari/f/p/g/free-digital-print-sarees-sadika-unstitched-original-imagmarfax3z6sfn.jpeg?q=70",
    brand: "Men's Cargos",
    retail_price: 1799,
  },
  {
    id: 7,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/sandal/y/5/t/8-sandals-42-vechlo-black-original-imag5rzzbq2fvahj-bb.jpeg?q=70",
    brand: "Analog Watch",
    retail_price: 201000,
  },
  {
    id: 8,
    image:
      "https://rukminim1.flixcart.com/image/200/200/l58iaa80/dupatta/4/h/v/2-25-meters-1-nf39-invent-fashion-original-imagfyamwgemyczz.jpeg?q=70",
    brand: "Men's Cargos",
    retail_price: 2199,
  },
];

function Car() {
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
            Fashion for Men
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
                  <Link to="/products/men">
                    <div className="slider" key={index}>
                      <div className="slider8">
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

export default Car;
