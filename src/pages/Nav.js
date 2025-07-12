import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import { FiUser } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";

function Nav() {
  return (
    <div className='nvmain'>
      <div className='nv1'>
        <h1>GWENS</h1>
      </div>
      <nav>
        <NavLink className='nv2' to={"/"}><li>HOME</li></NavLink>
        <NavLink className='nv2' to={"/shop"}><li>SHOP CART</li></NavLink>  
        <NavLink className='nv2' to={"/blog"}><li>BLOG</li></NavLink>      
        <NavLink className='nv2' to={"/pages"}><li>PAGES</li></NavLink>
        
      </nav>
      <ul className='nv3'>
        <NavLink className='nv2' to={"/user"}><li><FiUser /></li></NavLink>
        <NavLink className='nv2' to={"/blog"}><li><IoIosHeartEmpty /></li></NavLink>
        <NavLink className='nv2' to={"/shop"}><li><IoBagHandleOutline /></li></NavLink>
                                         
      </ul>
      
    </div>
  )
}

export default Nav
