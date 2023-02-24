
import React from "react"
import './AdminProduct.css'
import { Button,Box } from "@chakra-ui/react";
import {AiTwotoneDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePen,faTrash} from '@fortawesome/free-solid-svg-icons'
import { useEffect,useState } from "react";

let  AdninProduct=()=>{
    const[data,setData]=useState([])
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
   
    







return(
    






    <div>





<div className="card-wrapper">

<div className="card">
<div className="product-imgs">
<div className="img-display">
<div className="img-showcase">
<img src ="https://github.com/prabinmagar/product-detail-card-slider/blob/master/shoes_images/shoe_1.jpg?raw=true"  alt = "shoe image"/>
 <img src = "https://github.com/prabinmagar/product-detail-card-slider/blob/master/shoes_images/shoe_2.jpg?raw=true" alt = "shoe image"/>
<img src = "https://github.com/prabinmagar/product-detail-card-slider/blob/master/shoes_images/shoe_3.jpg?raw=true" alt = "shoe image"/>
 <img src="https://github.com/prabinmagar/product-detail-card-slider/blob/master/shoes_images/shoe_4.jpg?raw=true" alt = "shoe image"/>
</div>
</div>
<div className="img-select">
<div className="img-item">
<a href = "#" data-id = "1">
                <img src = "https://github.com/prabinmagar/product-detail-card-slider/blob/master/shoes_images/shoe_1.jpg?raw=true" alt = "shoe image"/>
 </a>
</div>
<div className="img-item">
<a href = "#" data-id = "2">
                <img src = "https://github.com/prabinmagar/product-detail-card-slider/blob/master/shoes_images/shoe_2.jpg?raw=true"/> </a>
</div>
<div className="img-item">
<a href = "#" data-id = "3">
                <img src = "https://github.com/prabinmagar/product-detail-card-slider/blob/master/shoes_images/shoe_3.jpg?raw=true"  alt = "shoe image"/>
 </a>
</div>
<div className="img-item">
<a href = "#" data-id = "4">
                <img src = "https://github.com/prabinmagar/product-detail-card-slider/blob/master/shoes_images/shoe_4.jpg?raw=true" alt = "shoe image"/>
 </a>
</div>
</div>
</div>
<div className="product-content">
    <h2 className="product-title">Nike Shoes</h2>
    
         


          <div className = "product-price">
            <p className  = "last-price">Old Price: <span>999</span></p>
            <p className  = "new-price">New Price: <span>$249.00 (5%)</span></p>
          </div>

          <div className = "product-detail">
            <h2 className="Aboutitem">About this item: </h2>
          <p> Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Navy, Red, Navy,Specifications of Alisha 
            Solid Women's Cycling Shorts Shorts Details Number of Contents in Sales Package Pack of 3 Fabric Cotton Lycra
             Type Cycling Shorts General Details Pattern Solid Ideal For Women's Fabric Care Gentle Machine Wash in 
             Lukewarm Water, Do Not Bleach Additional Details Style Code ALTHT_3P_21 In the Box 3 shorts</p> 
            <ul>
              <li  >Color: <span>Black</span></li>
              <li >Available: <span>in stock</span></li>
              <li >Category: <span>Shoes</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li >Shipping Fee: <span>Free</span></li>
            </ul>
           
         
          </div>
          <button className="but"><FontAwesomeIcon size="30px" icon={faSquarePen} /> Edit</button>
         <button className="but2"> <FontAwesomeIcon size="30px" icon={faTrash} /> Delete</button> 
         
           

</div>
</div>



</div>








    </div>
)






}


export default AdninProduct