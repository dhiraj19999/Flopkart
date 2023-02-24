
import React from 'react';
import { Box, Grid, GridItem, Img, Text } from '@chakra-ui/react';

function Category() {


    let data = [
        {
            image: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
            title: "Grocery"
        },
        
        {
            image: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
            title: "Mobiles"
        },
        {

            image: "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
            title: "Fashion"
        },
        {
            image: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
            title: "Electronics"
        },
        {
            image: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
            title: "Home"
        },
        {
            image: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
            title: "Appliances"
        },
        {
            image: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
            title: "Travel"
        },
        {
            image: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
            title: "Top Offers"
        },
         {
            image: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
            title: "Beauty, Toya & More"
        }
        ,
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
            title: "Two Wheelers"
        }
    ]

    return (

        <Box bg="white" boxShadow="2xl">

            <Box display={{ base: "none", sm: "grid",md: "grid", lg: "grid" }} >

                <Grid pb="20px" textAlign={"center"} templateColumns='repeat(10, 1fr)' m="auto" gap="10px" mt='1rem' pl="5px" pr="5px"  >
                    {
                        data.map((ele, index) => (
                           
                                <GridItem _hover={{ color: "#2874F0" }} fontSize={{ base: "0px",sm:"10px", md: "12px", lg: "14px" }}
                                >
                                    
                                    <Box cursor={'pointer'} > <Img src={ele.image} alt="" height={{ base: "0px",sm:"30px", md: "50px", lg: "60px" }} m="auto" />
                                            
                                            <Text fontWeight={'600'}> {ele.title}</Text>

                                    </Box>

                                </GridItem>
            
                        ))
                    }
                </Grid>
            </Box>


        </Box>
    );
}

export default Category;