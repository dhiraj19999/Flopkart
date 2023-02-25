import React from 'react';
import { Box,Button, Img, Text, WrapItem} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Car.css";
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
      "http://img5a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-m-original-imaeczn7rzdcghrz.jpeg",
      brand:"Roadster",
      retail_price:1399
  },
  
  //Second image url
  {id:2,
    image:
      "http://img5a.flixcart.com/image/cargo/n/6/q/sky-8164-dpista-skystar-l-original-imae97ymmsuzybeg.jpeg",
      brand:"Men's Cargos",
      retail_price:750
  },
  {id:3,
    image:
      "http://img5a.flixcart.com/image/watch/8/e/4/lcs-4032-lois-caron-original-imaed5fpyhyzdvkt.jpeg",
      brand:"Caron Watch",
      retail_price:1200
  },
  {id:4,
    image:
      "http://img6a.flixcart.com/image/cargo/z/a/5/sscp04-multicolor-j-marks-xl-original-imae6xvb34p2mt38.jpeg",
      brand:"Men's Cargos",
      retail_price:1765
  },
  {id:5,
    image:
      "http://img5a.flixcart.com/image/cargo/q/u/c/mslb0018-london-bee-30-original-imae3pfysft6drgy.jpeg",
      brand:"Men's Cargos",
      retail_price:1699
  },
  {id:6,
    image:
      "http://img5a.flixcart.com/image/cargo/t/j/z/768bro-bodymark-32-1000x1000-imae4xjb7wf8yxvd.jpeg",
      brand:"Men's Cargos",
      retail_price:1799
  },
  {id:7,
    image:
      "http://img6a.flixcart.com/image/watch/7/g/m/w6701005-cartier-original-imaeajwaz8hpsfes.jpeg",
      brand:"Analog Watch",
      retail_price:201000
  },
  {id:8,
    image:
      "http://img5a.flixcart.com/image/cargo/n/g/h/cargo-38-green-madcaps-34-original-imae5qgvt3fhqq33.jpeg",
      brand:"Men's Cargos",
      retail_price:2199
  }
  
];

function Car() {

    return (
        <div> 
        <Box display={"flex"} mt="30px" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" p='1' bg='white' >

            <Box width="25%" h="300px" m="auto" textAlign={"center"} className="dealsBox" border={"1px solid black"}>
                <Text paddingTop={{base:"120px", md:"120px", lg:"40px"}}  fontSize={{ base: '10px', md: '20px', lg: '30px' }}>Fashion Top Deals</Text>

                <WrapItem pt="30px">
                    <Button  fontSize={{ base: '6px', md: '9px', lg: '12px' }} m={"auto"} colorScheme='messenger'>
                   
                        VIEW ALL
                
                        </Button>
                </WrapItem>
                <Img   src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/31d46a8fd93eeedd.jpg?q=90" alt="fg" width={"100%"}/>

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
                <div className='slider8'>
              <img src={imageUrl.image} alt="movie"/>
              </div>
              <div style={{margin:"auto",marginTop:"10px",textAlign:"center"}}>
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

export default Car;