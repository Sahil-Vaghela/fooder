import React from 'react'
import Nav from './Nav'
import './shop.css'
import { NavLink } from 'react-router-dom'

function Shop({ c }) {
  return (
    <div className='smain'>
      <Nav />
      <div className='sd1'>
        {
        c.map((k) => {
          return (
            <div className='sd11'>
              <img className='simg' src={k.photo} alt={k.title} />
              <h1>{k.name}</h1>
              <h1>${k.price}</h1>
              <NavLink to={"/user"}><button>Buy Now</button></NavLink>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Shop
