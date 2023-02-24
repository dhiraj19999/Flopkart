import React from "react"
import { Box,Button,Center,Image, SimpleGrid ,Text} from "@chakra-ui/react"
import { useEffect,useState } from "react"
import { Wrap, WrapItem } from '@chakra-ui/react'
import {GiNextButton,GiPreviousButton} from 'react-icons/gi'

import "./Adminproducts.css"
function Allproducts(){
    const[data,setData]=useState([])
    const[page,setPage]=useState(4)
useEffect(()=>{

getData(page).then((res)=>{
    setData(res)
    
    console.log(data)

})

},[])

function handlered(){

   setPage(page-1)
   getData(page).then((res)=>{
    setData(res)
   })
   console.log(page)
}


function handleadd(){
    setPage(page+1)
    getData(page).then((res)=>{
        setData(res)
       })
    console.log(page)

}
const  getData= async(page) =>{
    return await fetch(`https://drab-pants-bass.cyclic.app/products?limit=32&page=${page}`).then((res)=>res.json())
  }




 









    return(

<Box ml='260px'>

<Wrap spacing='200px' justify='center' >

<SimpleGrid columns={{lg:3,md:3,sm:2,base:1,xl:4}} gap='60px' borderBottom={"2px solid black"}>


{
    data?.data?.map((item)=>{
        let y=JSON.parse(item.image)
        let r=item.retail_price-item.discounted_price
      
        let f=r/item.retail_price
      let k=f*100
      let j=k.toFixed(0)
     
       return <WrapItem  display={'block'} mt='60px' w="220px" className="card">
<Center display={'block'}>
        <Image src={y[0]} w="300px" h="350px" className="product--image"/>
        
        <Text   fontWeight={'bold'}>{item.brand}</Text>
        <Text  color="grey" fontsize="7px"   noOfLines={1}>{item.product_name
}</Text>
<div className = "product-price">

      <p className="firp"><p className="new-price"> RS{item.discounted_price}</p>   <p className="last-pricespan">{item.retail_price}</p>  <p>{`( ${j}%OFF )`}</p></p>      
            
          </div>

          <Button colorScheme={'pink'}>Show Details</Button>
</Center>
          </WrapItem>
      
    })

    
 

}

</SimpleGrid>
<br/>
<Box  className="pag">
<Button _hover={{color:"black",bg:"pink"}}    rightIcon={<GiPreviousButton/>} color={'black'} mr='35px'   mt='-200px' onClick={()=>handlered()}>Prev</Button>  <Button  _hover={{color:"black",bg:"purple"}}  color={'black'}  mt='-200px' mr='35px'  >{page}</Button>   
<Button rightIcon={<GiNextButton/>} _hover={{color:"black",bg:"pink"}}  color={'black'} colorScheme={"pink"} mt='-200px'  onClick={()=>handleadd()}>Next</Button>

</Box>  
</Wrap>

</Box>
 

    )
}

export default Allproducts