import React from "react";
import { Box, Button, Image, Img, Text, WrapItem } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./toy.css";
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
      "https://rukminim1.flixcart.com/image/200/200/xif0q/nut-dry-fruit/9/0/a/750-dry-fruits-combo-pack-of-cashews-almonds-raisins-kismis-kaju-original-imaghdt9xapckmtp.jpeg?q=70",
    brand: "Kennel",
    retail_price: 190,
  },
  {
    id: 2,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/kurta/i/d/n/3xl-nsg-358-saabhi-original-imaghrb4t4wudgfp.jpeg?q=70",
    brand: "Snug Hug",
    retail_price: 499,
  },
  //Second image url
  {
    id: 3,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/jewellery-set/h/c/d/na-cultured-1-jw115-1-konasa-original-imagmekwgjzgugje.jpeg?q=70",
    brand: "Creative Spinach",
    retail_price: 799,
  },
  {
    id: 4,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/sari/6/o/v/free-ms-293-brown-bella-worth-unstitched-original-imagkxg3cpznzuuz.jpeg?q=70",
    brand: "Pawzone",
    retail_price: 200,
  },
  {
    id: 5,
    image:
      "https://rukminim1.flixcart.com/image/200/200/l4fxh8w0/hand-messenger-bag/a/g/v/stylish-handbag-women-girls-pink-vintage-star-hand-held-bag-original-imagfcb23pwdwk3f.jpeg?q=70",
    brand: "Speedwav",
    retail_price: 1400,
  },
];

function Toy() {
  return (
    <div>
      <Box
        display={"flex"}
        mt="30px"
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
            Top deals on toys
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
                  <Link to="/products/watch">
                    <div className="slider" key={index}>
                      <div className="slider5">
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

export default Toy;
