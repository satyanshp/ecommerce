import React from 'react'
import './menu.css'
import { AiOutlineClose } from "react-icons/ai";


const Menu = ({toggSrc,popup,closehmenu,hmenut}) => {
  return (
    <div className='hmenu'>
        <div className='mainhmenu'>
            <div onClick={closehmenu} className='hclose'><AiOutlineClose size={23}/></div>
            <div className='hmenulinks'>
              <li>Notifications</li>
              <li>Sell on Flipkart</li>
              <li>Costomer Care</li>
              <li>Download App</li>
              <li>Account</li>
              <li onClick={closehmenu}><div className={toggSrc?'login active':'login'}   > <span onClick={popup}>Login</span></div></li>
            </div>
        </div>
        <div onClick={closehmenu} className='overlay'></div>
    </div>
  )
}

export default Menu