import React from 'react';
import { Link } from 'react-router-dom';
import './viewfas.css'

const Viewfas = ({fashionData,show,add,gett,type}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
     

  return <div className='viewpr'>
      <div className='view-head' >
          <h2 >Fashion Products</h2>
          <select id='sort' onChange={(event)=>type(event.target.value)}>
              <option value="sortby">Short By...</option>
              <option  value="hlsortt">Price : High To Low</option>
              <option value="lhsortt">Price : Low To High</option>
              <option value="popularity">Popularity</option>
          </select>
      </div>
          <div className='viewpr-cont'  >
           {fashionData.map((fasview,index)=>{
               return(
                     <div className='view-cont' onClick={ ()=>gett(fasview.id)}  >
                        <div >
                            <div onClick={show}>
                            <img src={fasview.pic} alt="" />
                            <h2>{fasview.name}</h2>
                            <p>{fasview.category}</p>
                            <h3>₹{numberWithCommas(fasview.price)}</h3>
                            </div>
                            
                        </div>
                        <div className='view-button'>
                            <button className='viewaddtocart' onClick={()=>add(fasview.id)}>Add To Cart</button>
                            <Link className='viewlink' to="/cart"><button className='viewshowcart' >SHOW CART ITEMS</button></Link>
                        </div>
                   </div>
                  
               );
           })}
          </div>
  </div>;
};

export default Viewfas;
