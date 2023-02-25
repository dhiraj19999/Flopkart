import React from "react"
import { Box,Button,Center,Image, SimpleGrid ,Text} from "@chakra-ui/react"
import { useEffect,useState } from "react"
import { Wrap, WrapItem } from '@chakra-ui/react'
import {GiNextButton,GiPreviousButton} from 'react-icons/gi'
import { useNavigate } from "react-router-dom"
import "./Adminproducts.css"
function Allproducts(){
    const[data,setData]=useState([])
    const[page,setPage]=useState(1)
    const navigate = useNavigate()
useEffect(()=>{

getData(page).then((res)=>{
    setData(res)
    
    console.log(data)

})

},[])

function showdetail(id){
    navigate(`/Adminsingle/${id}`)
    

}



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

<Box ml='252px'>

<Wrap spacing='200px' justify='center' >

<SimpleGrid columns={{lg:2,md:2,sm:1,base:1,xl:4}} gap='30px' borderBottom={"2px solid black"}>


{
    data?.data?.map((item)=>{
        let y=JSON.parse(item.image)
        let r=item.retail_price-item.discounted_price
      
        let f=r/item.retail_price
      let k=f*100
      let j=k.toFixed(0)
     if(item.product_name && item.brand ){
       return <WrapItem  display={'block'} mt='60px' w="250px" className="card" boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}>
<Center display={'block'}>
        <Image src={y[0]}  h="350px"w='300px' _hover={{WebkitTransform: "scale(1.2)",transform:" scale(1.2)",WebkitTransition:" .3s ease-in-out",transition:".3s ease-in-out"}}   objectFit={'cover'} display={'inline-block'}/>
        
        <Text textAlign={'center'}  fontWeight={'bold'}>{item.brand}</Text>
        <Text textAlign={'center'}  color="grey" fontsize="7px" mt='7px'  noOfLines={1}>{item.product_name
}</Text>
<div  style={{marginTop:"12px"}}>

      <p style={{display:"flex"}}><p  style={{marginLeft:"30px",fontWeight:"bold"}}> RS.{" "}{item.discounted_price}</p> {" "}  <p style={{color:"indianred",textDecoration:"line-through",marginLeft:"7px",fontWeight:"bold"}}>{item.retail_price}</p> {" "} <p style={{marginLeft:"7px",color:"indianred",fontWeight:"bold"}}>{`( ${j}%OFF )`}</p></p>      
            
          </div>

          <Button _hover={{color:"black",bg:"pink"}} mt='14px'  onClick={()=>showdetail(item._id)} w="100%" color="pink" bg={"black"}>Show Details</Button>
</Center>
          </WrapItem>
     }
      
    })

 
 

}

</SimpleGrid>
<br/>
<Box  className="pag">
<Button _hover={{color:"black",bg:"pink"}}  bg={"black"}   rightIcon={<GiPreviousButton/>} color={'pink'} mr='35px'   mt='-200px' onClick={()=>handlered()}>Prev</Button>  <Button  _hover={{color:"black",bg:"pink"}}  color={'pink'} bg="black" mt='-200px' mr='35px'  >{page}</Button>   
<Button rightIcon={<GiNextButton/>} _hover={{color:"black",bg:"pink"}}  color={'pink'}  bg={"black"} mt='-200px'  onClick={()=>handleadd()}>Next</Button>

</Box>  
</Wrap>

</Box>
 

    )
}

export default Allproducts