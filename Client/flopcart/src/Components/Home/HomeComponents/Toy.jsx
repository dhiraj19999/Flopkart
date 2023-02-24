import React from 'react';
import { Box,Button, Img, Text, WrapItem} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./toy.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {id:1,
    image:
      "http://img5a.flixcart.com/image/pet-toy/n/a/r/a35-kennel-original-imaea5c3qxyqzrgz.jpeg",
      brand:"Kennel",
      retail_price:190
  },
  {id:2,
    image:
      "http://img5a.flixcart.com/image/pet-toy/r/7/m/01-snug-hug-1100x1100-imaeayzpsfpbjb4h.jpeg",
      brand:"Snug Hug",
      retail_price:499
  },
  //Second image url
  {id:3,
    image:
      "http://img6a.flixcart.com/image/pet-toy/z/c/p/blue-lion-fish-creative-spinach-original-imaedhmjvh9q3htz.jpeg",
      brand:"Creative Spinach",
      retail_price:799
  },
  {id:4,
    image:
      "http://img6a.flixcart.com/image/pet-toy/y/a/r/pawzone-solid-rubber-dumble-toy-for-pets-pawzone-1100x1100-imaee4qmzfrfgzwg.jpeg",
      brand:"Pawzone",
      retail_price:200
  },
  {id:5,
    image:
      "http://img5a.flixcart.com/image/sun-shade/7/r/x/240349-speedwav-original-imaehpqkaw9zh9mq.jpeg",
      brand:"Speedwav",
      retail_price:1400
  }
  
];

function Toy() {

    return (
        <div> 
        <Box display={"flex"} mt="30px" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" p='1' bg='white' >

            <Box width="25%" h="300px" m="auto" textAlign={"center"} className="dealsBox" border={"1px solid black"}>
                <Text paddingTop={{base:"120px", md:"120px", lg:"40px"}}  fontSize={{ base: '10px', md: '20px', lg: '30px' }}>Shop for a cool summer</Text>

                <WrapItem pt="30px">
                    <Button  fontSize={{ base: '6px', md: '9px', lg: '12px' }} m={"auto"} colorScheme='messenger'>
                   
                        VIEW ALL
                
                        </Button>
                </WrapItem>
                <Img   src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/59d58e5ce057f2e6.jpg?q=90" alt="fg" width={"100%"}/>

            </Box>
            <Box w={{ base: '80%', md: '75%', lg: '84%' }} m="auto" className="OffSlider" border={"1px solid black"} h="300px">
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
                <div className='slider5'>
              <img src={imageUrl.image} alt="movie"/>
              </div>
              <div style={{marginTop:"10px"}}>
              <p>{imageUrl.brand}</p>
              <p>From  ₹{imageUrl.retail_price}</p>
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

export default Toy;