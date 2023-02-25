import React from "react";
import Banner from '../../Components/Home/HomeComponents/Banner'
import BeforeFooter from '../../Components/Home/HomeComponents/BeforeFooter'
import { Box } from '@chakra-ui/react'
import Category from '../../Components/Home/HomeComponents/Category'
import Electronics from '../../Components/Home/HomeComponents/Electronics'
import Deal from "../../Components/Home/HomeComponents/Deal"
import Watch from "../../Components/Home/HomeComponents/Watch"
import Shoes from "../../Components/Home/HomeComponents/Shoes"
import Toy from "../../Components/Home/HomeComponents/Toy"
import Kurta from "../../Components/Home/HomeComponents/Kurta"
import Kids from "../../Components/Home/HomeComponents/Kids"
import Car from "../../Components/Home/HomeComponents/Car"
import Bed from "../../Components/Home/HomeComponents/Bed"
import Cycling from "../../Components/Home/HomeComponents/Cycling";

const Home = () => {
    
  return (
     <>
    
      <Box>
         <Category/>
         
          <Banner />
          <Electronics/>
          <Car/>
          <Kurta/>
          <Toy/>
          <Deal/>
          <Bed/>
          <Shoes/>
          <Kids/>
          <Watch/>
          <Cycling/>
          <BeforeFooter />
         
      </Box> 
    
    
      </>
     
  )
}

export default Home