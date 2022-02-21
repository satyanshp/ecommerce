import React from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './products.css'




const Fasion = ({showw,gett,fashionData}) => {

  const leftScroll = ()=>{
    var slide = document.getElementById("cont");
    slide.scrollLeft = slide.scrollLeft - 500;
    // console.log(slide)
  }
  const rightScroll = ()=>{
    const slide =document.getElementById('cont');
    slide.scrollLeft = slide.scrollLeft + 500;
    
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }



  
  return <div className='product'>
       <div className='top'>
         <h2>Fashion's Bestseller</h2>
          <Link to='/viewfas'>
            <button>
              VIEW ALL
            </button>
          </Link>
         
         <div className='scroll scrollLeft' onClick={leftScroll}><AiFillCaretLeft size={35}/></div>
         <div className='scroll scrollRight' onClick={rightScroll}><AiFillCaretRight size={35}/></div>
       </div>

       
       <div className='containt' id='cont' onClick={showw}>
          {fashionData.map((product, index)=>{
              return(
                <div onClick={()=>gett(product.id)} className='product-container'>
                    <img src={product.pic} alt="product" />
                    <h2>{product.name}</h2>
                    <h3>₹{numberWithCommas(product.price)}</h3>
                    <h4>{product.category}</h4>
                </div>
                
              );
            })}
       </div>
        
        
  </div>;
};

export default Fasion;