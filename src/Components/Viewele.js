import React from 'react';
import { Link } from 'react-router-dom';
import './viewele.css'

const Viewele = ({electronicsData,show,add,get,typee}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  return <div className='viewpr'>
      <div className='view-head'>
          <h2>Electronics Products</h2>
          <select onChange={(event)=>typee(event.target.value)}>
              <option value="sortby">Short By...</option>
              <option value="hlsortt">Price : High To Low</option>
              <option value="lhsortt">Price : Low To High</option>
              <option value="popurarity">Popularity</option>
          </select>
      </div>
          <div className='viewpr-cont' >
           {electronicsData.map((eleview,index)=>{
               return(
                 <div className='view-cont' onClick={ ()=>get(eleview.id)}>
                     <div >
                         <div onClick={show}>
                            <img src={eleview.pic} alt="" />
                            <h2>{eleview.name}</h2>
                            <p>{eleview.category}</p>
                            <h3>₹{numberWithCommas(eleview.price)}</h3>
                         </div>
                     </div>
                     
                     <div className='view-button' >
                        <button className='viewaddtocart' onClick={()=>add(eleview.id)}>Add To Cart</button>
                        <Link className='viewlink' to="/cart"><button className='viewshowcart' >SHOW CART ITEMS</button></Link>
                     </div>
                      
                 </div>  
               );
           })}
          </div>
  </div>;
};

export default Viewele;
