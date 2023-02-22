import React from 'react'

import Banner from './HomeComponents/Banner'
import BeforeFooter from './HomeComponents/BeforeFooter'
import { Box } from '@chakra-ui/react'
import NavBar from './HomeComponents/NavBar'


const Home = () => {
    
    return (
       <>
       <NavBar/>
        <Box>
           
            <Banner />
            <BeforeFooter />
           
        </Box> 
      
      
        </>
       
    )
}

export default Home