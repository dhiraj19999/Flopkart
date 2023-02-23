import React from 'react';
import { Box,Button, Img, Text, WrapItem} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Shoes.css";
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
  {
    image:
      "http://img6a.flixcart.com/image/shoe/g/6/e/red-1216-nuride-41-original-imaedsa82yrz5hxu.jpeg",
      brand:"Nuride",
      retail_price:1999
  },
  {
    image:
      "http://img5a.flixcart.com/image/shoe/k/t/g/beige-sb-whtsldrb-beige-shoebuzz-7-1000x1000-imaejgx4pkskscjm.jpeg",
      brand:"ShoeBuzz",
      retail_price:799
  },
  //Second image url
  {
    image:
      "http://img6a.flixcart.com/image/shoe/c/s/v/white-gl-galaxy-5-glacier-9-original-imaefp8hkszjbvnq.jpeg",
      brand:"Glacier",
      retail_price:629
  },
  {
    image:
      "http://img5a.flixcart.com/image/shoe/7/x/a/island-blue-black-indigo-blue-asics-12-1000x1000-imaegdyh2awrm5vu.jpeg",
      brand:"Asics",
      retail_price:9499
  },
  {
    image:
      "http://img6a.flixcart.com/image/shoe/u/r/d/black-red-jqr-12blade-3-jqr-44-original-imaeh7y5fangcfpm.jpeg",
      brand:"JQR",
      retail_price:1299
  },
  {
    image:
      "http://img5a.flixcart.com/image/kit/q/n/w/jaspo-1-jaspo-saphire-dual-shoe-skates-comb-size-11-uk-for-age-original-imaedwyfbzbu2jdz.jpeg",
      brand:"JASPO",
      retail_price:2299
  }
  
];

function Shoes() {

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
                <div className='slider2'>
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

export default Shoes;