import React from 'react'

import Banner from './HomeComponents/Banner'
import BeforeFooter from './HomeComponents/BeforeFooter'
import { Box } from '@chakra-ui/react'
import Category from './HomeComponents/Category'
import Electronics from './HomeComponents/Electronics'
import Deal from "./HomeComponents/Deal"
import Watch from "./HomeComponents/Watch"
import Shoes from "./HomeComponents/Shoes"

const Home = () => {
    
    return (
       <>
      
        <Box>
           <Category/>
            <Banner />
            <Electronics/>
            <Deal/>
            <Shoes/>
            <Watch/>
            <BeforeFooter />
           
        </Box> 
      
      
        </>
       
    )
}

export default Home