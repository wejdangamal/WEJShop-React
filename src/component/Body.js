import React from 'react'
import  { Component } from 'react'
import pic1 from '../Images/phones/1.jpg'
import pic2 from '../Images/phones/1 (2).jpg'
import pic3 from '../Images/phones/1 (1).jpg'
import pic4 from '../Images/phones/1 (3).jpg'
import pic5 from '../Images/phones/1 (4).jpg'
import pic6 from '../Images/phones/1 (5).jpg'
import pic7 from '../Images/phones/1 (6).jpg'
import pic8 from '../Images/phones/1 (7).jpg'
import pic9 from '../Images/phones/1 (8).jpg'
import pic10 from '../Images/labtops/1.jpg'
import pic11 from '../Images/labtops/1 (1).jpg'
import pic12 from '../Images/labtops/1 (2).jpg'
import pic13 from '../Images/labtops/1 (3).jpg'
import pic14 from '../Images/labtops/1 (4).jpg'
import pic15 from '../Images/labtops/1 (5).jpg'
import pic16 from '../Images/labtops/1 (6).jpg'
import pic17 from '../Images/labtops/1 (7).jpg'
import pic18 from '../Images/labtops/1 (8).jpg'
import pic19 from '../Images/Makeup/1.jpg'
import pic20 from '../Images/Makeup/1 (1).jpg'
import pic21 from '../Images/Makeup/1 (2).jpg'
import pic22 from '../Images/Makeup/1 (3).jpg'
import pic23 from '../Images/Makeup/1 (4).jpg'
import pic24 from '../Images/Makeup/1 (5).jpg'
import pic25 from '../Images/Makeup/6.jpg'
import pic26 from '../Images/Makeup/7.jpg'
import Slider from './slider'
import './bodyst.css'
import {useState} from 'react'
import Nav from './nav'
import { style } from 'dom-helpers';
export default function Body() {

   const [count,setCount] = useState(0);

   const products =[
    {id: 0, type: 'phones', title: 'Iphone',image:pic1 , discription:'Iphone 12 pro RAM with 128GB storage darkBlue price 30,000LE',},
    {id: 1, type: 'phones', title: 'Samsung',image:pic2 , discription:'Samsung Galaxy M51 6GB RAM with 128GB storage price 4,050LE',},
    {id: 2, type: 'phones', title: 'Redmi',image:pic3 , discription:'Redmi Galaxy M51 6GB RAM with 128GB storage price 4,050LE',},
    {id: 3, type: 'phones', title: 'Redmi',image:pic4 , discription:'Redmi Galaxy M51 6GB RAM with 128GB storage price 4,050LE',},
    {id: 4, type: 'phones', title: 'Samsung',image:pic5 , discription:'Samsung Galaxy M51 6GB RAM with 128GB storage price 4,050LE',},
    {id: 5, type: 'phones', title: 'Iphone',image:pic6 , discription:'Iphone Galaxy M51 6GB RAM with 128GB storage price 25,000LE',},
    {id: 6, type: 'phones', title: 'Iphone',image:pic7 , discription:'Iphone Galaxy M51 6GB RAM with 128GB storage price 25,000LE',},
    {id: 7, type: 'phones', title: 'Samsung',image:pic8 , discription:'Samsung Galaxy M51 6GB RAM with 128GB storage price 4,050LE',},
    {id: 8, type: 'phones', title: 'Redmi',image:pic9 , discription:'Redmi Galaxy M51 6GB RAM with 128GB storage price 4,050LE',},
    {id: 9, type: 'labtops', title: 'Mac',image:pic10 , discription:'Apple MacBook Air 13 Intel Core I3 - 8GB RAM - 256GB Flash - 13.3-inch 15,000LE',},
    {id: 10, type: 'labtops', title: 'HP',image:pic11 , discription:'HP Intel Core I3 - 8GB RAM - 256GB Flash - 13.3-inch 15,000LE',},
    {id: 11, type: 'labtops', title: 'Dell',image:pic12 , discription:'Dell Intel Core I3 - 8GB RAM - 256GB Flash - 13.3-inch 15,000LE',},
    {id: 12, type: 'labtops', title: 'Dell',image:pic13 , discription:'Dell Intel Core I3 - 8GB RAM - 256GB Flash - 13.3-inch 15,000LE',},
    {id: 13, type: 'labtops', title: 'Dell',image:pic14 , discription:'Dell Intel Core I3 - 8GB RAM - 256GB Flash - 13.3-inch 15,000LE',},
    {id: 14, type: 'labtops', title: 'Dell',image:pic15 , discription:'Dell Intel Core I3 - 8GB RAM - 256GB Flash - 13.3-inch 15,000LE',},
    {id: 15, type: 'labtops', title: 'Dell',image:pic16 , discription:'Dell Intel Core I3 - 8GB RAM - 256GB Flash - 13.3-inch 15,000LE',},
    {id: 16, type: 'labtops', title: 'Dell',image:pic17 , discription:'Dell Intel Core I3 - 8GB RAM - 256GB Flash - 13.3-inch 15,000LE',},
    {id: 17, type: 'labtops', title: 'Dell',image:pic18 , discription:'Dell Intel Core I3 - 8GB RAM - 256GB Flash - 13.3-inch 15,000LE',},
    {id: 18, type: 'Makeup', title: 'Foundation',image:pic19 , discription:'MAC Studio Fix Fluid Foundation - No.NC10 800LE ',},
    {id: 19, type: 'Makeup', title: 'Blusher',image:pic20 , discription:'MAC Mineralize Blush Blusher - Bubbles Please, 4 GE 1000LE',},
    {id: 20, type: 'Makeup', title: 'Foundation',image:pic21 , discription:'Make Up Forever Matte Velvet Skin Full Coverage Foundation, Y215',},
    {id: 21, type: 'Makeup', title: 'contour',image:pic22 , discription:'Make Up Forever Matte Velvet Skin Full Coverage Contour 450LE',},
    {id: 22, type: 'Makeup', title: 'Loose powder',image:pic23 , discription:'Make Up Forever Matte Velvet Skin Full Coverage loose powder 200LE',},
    {id: 23, type: 'Makeup', title: 'Eyeshadow',image:pic24 , discription:'MAKE UP FOR EVER Artist Shadow Refill (ME728 Copper Red ) 450LE',},
    {id: 24, type: 'Makeup', title: 'Lipstick',image:pic25 , discription:'Mac 880LE ',},
    {id: 25, type: 'Makeup', title: 'Eyeliner',image:pic26 , discription:'Amanda 200LE',},
   ]

       const [State,setState] =useState(products)
      
      
       const increaseCount =()=>{
       setCount(count+1)
       }
       
       const decreaseCount=()=>{
           setCount(count-1)
       }
        
       const filterPage =(page)=>{
          const newData =[]
          products.filter((task)=>{
                   if(page==='all'){
                       newData.push(task)
                      }
                   else{
                    if(task.type===page){
                        newData.push(task)
                    }
                    }
                })
            setState(newData)
        }
   return (
       <div>
           <Nav count = {count} />
           <Slider/>
           <div className=" p-3 my-2">
               <button type="button" className="btn btn-danger mx-3" onClick={()=> filterPage('all')}> All </button>
               <button type="button" className="btn btn-dark mx-3" onClick={()=> filterPage('Makeup')}> Makeup </button>
               <button type="button" className="btn btn-dark mx-3" onClick={()=> filterPage('phones')}> Phones </button>
               <button type="button" className="btn btn-dark mx-3" onClick={()=> filterPage('labtops')}> Labtops </button>
           </div>
           <h1 className="text-center text-danger p-2 ">Products</h1>
           <div className=" container-fluid my-2" >
               <div className="row">
                   {   
                       State.map((item) => {
                           return (
                               <div className="col-3 my-3">
                               <div className="card">
                             <img src={item.image} className="card-img-top" alt="image"/>    
                               <div className="card-body">
                               <h5 className="card-title">{item.title}</h5>
                               <p className="card-text">
                              {item.discription}
                               </p>
                               <a href="#!" className="btn btn-dark" onClick={increaseCount}>Add to card</a>
                               </div>
                               </div>
                               </div>  
                           )
                       })
                   }
               </div>
                       {
                           count>0 &&
                           <div className="container">
                           <button  className="btn btn-danger bu my-2 mx-5" onClick={decreaseCount}> Remove </button>
                           </div>
                       }
                      
           </div>
       </div>      
   )

}