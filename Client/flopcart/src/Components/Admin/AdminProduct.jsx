
import React from "react"
import "./single.css"
import { Button,Box } from "@chakra-ui/react";
import {AiTwotoneDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePen,faTrash} from '@fortawesome/free-solid-svg-icons'
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useDisclosure,Modal,ModalBody,ModalContent,ModalHeader,ModalFooter,ModalCloseButton,ModalOverlay } from "@chakra-ui/react";

let  AdninProduct=()=>{
    const[data,setData]=useState([])
    const {id}=useParams()
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;
    
    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('mouseover', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });
    

    function slideImage(){
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    
        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }
    
    window.addEventListener('resize', slideImage);
   
    useEffect(()=>{
        
      getData(id).then(res=>{
        setData(res.data)
        console.log(id)
       console.log("single",data)
       
       
      })
      .catch(err=>{
        console.log(err)
      })
    },[id])
    

    const getData= async(id)=>{
      return await fetch(`https://drab-pants-bass.cyclic.app/products/${id}`)
    .then(res=>res.json())
    }

  
    
  




    
    
      const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
    
    
    



















return(
    








    <div>





<Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Custom backdrop filters!</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>


















{
  
data?data.map((item)=>{

 let  y=JSON.parse(item.image)
  let r=item.retail_price-item.discounted_price
 let cat=JSON.parse(item.product_category_tree
 )
  let f=r/item.retail_price
let k=f*100
 let j=k.toFixed(0)
 return (<div className="card-wrapper" >

<div className="card">
<div className="product-imgs">
<div className="img-display" >
<div className="img-showcase" >
<img src ={y[0]}  alt = "shoe image" />
 <img src = {y[1]} alt = "shoe image" />
<img src = {y[2]} alt = "shoe image" />
 <img src={y[3]} alt = "shoe image" />
</div>
</div>
<div className="img-select" >
<div className="img-item" >
<a href = "#" data-id = "1">
                <img src = {y[0]}alt = "shoe image" />
 </a>
</div>
<div className="img-item">
<a href = "#" data-id = "2">
                <img src ={y[1]} /> </a>
</div>
<div className="img-item">
<a href = "#" data-id = "3">
                <img src ={y[2]}  alt = "shoe image" />
 </a>
</div>
<div className="img-item">
<a href = "#" data-id = "4">
                <img src = {y[3]} alt = "shoe image"/>
 </a>
</div>
</div>
</div>
<div className="product-content">
    <h2 className="product-title">{data[0].product_name}</h2>
    
         


          <div className = "product-price">
            <p style={{marginLeft:"7px"}} className  = "last-price">Old Price: <span>RS.{" "+data[0].retail_price}</span></p>
            <p className  = "new-price">New Price: <span>RS.{" "+data[0].discounted_price} {`( ${j}%OFF )`}</span></p>
          </div>

          <div className = "product-detail">
            <h2 className="Aboutitem">About this item: </h2>
          <p> {data[0].description
}</p> 
            <ul>
              <li  >Color: <span>Multiple</span></li>
              <li >Available: <span>in stock</span></li>
             
              <li>Shipping Area: <span>All over the world</span></li>
              <li >Shipping Fee: <span>Free</span></li>
            </ul>
           
         
          </div >
          <div style={{display:"flex"}}>
          <button  onClick={() => {
              setOverlay(<OverlayTwo />)
              onOpen()
            }}    style={{width:"110px",height:"47px",backgroundColor: "#f64749",color:"black",marginLeft:"80px"}} className="but"><FontAwesomeIcon size="30px" icon={faSquarePen} /> Edit</button>
         <button  style={{width:"110px", height:"47px",backgroundColor: "#f64749",color:"black",marginLeft:"25px"}} className="but2"> <FontAwesomeIcon size="30px" icon={faTrash} /> Delete</button> 
         </div>
           

</div>
</div>



</div>)

}):""


}


    </div>

)






}


export default AdninProduct