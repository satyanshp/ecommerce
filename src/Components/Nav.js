import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
const Nav = ({popup,toggleSearch,toggleHamburger,toggSrc}) => {
  return <div className='nav'>
         <div className={toggSrc?'brand active':'brand'} >
             <h2> <Link to='/' style={{ textDecoration: 'none', color:'white' }}>FLIPKART</Link> </h2>
         </div>
         <div className={toggSrc?'search active':'search'}> 
             <form action="">
                    <input type="text" placeholder='Search for products...' />
                    <button type='submit'><FiSearch/></button>
              </form>
         </div>
         <div className='options'>
             <div className='res-search' onClick={toggleSearch}><FiSearch size={20}/></div>
             <div className={toggSrc?'login active':'login'} > <span onClick={popup}>Login</span></div>
             <div className={toggSrc?'more active':'more'}>More &nbsp;<FiChevronDown className='downicon'/> 
                <div className='drop-down'>
                    <li>Notifications</li>
                    <li>Sell on Flipkart</li>
                    <li>Costomer Care</li>
                    <li>Download App</li>
                    <li>Account</li>
                </div>
             </div>
             <div className={toggSrc?'cart-logo active':'cart-logo'}> <Link to="/cart" style={{ textDecoration: 'none',color:'white',display:'flex',alignItems:'center' }}><FiShoppingCart size={20}/> &nbsp;<span className='cart-text'>Cart</span></Link></div>
             <div className={toggSrc?'hamburger active':'hamburger'} onClick={toggleHamburger}><AiOutlineMenu size={25}/></div>
         </div>
  </div>;
};

export default Nav;
