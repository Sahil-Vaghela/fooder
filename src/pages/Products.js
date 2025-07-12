import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Data from './data'
import './products.css'
import Nav from './Nav'


function Products() {
  const { proname } = useParams()
  const prod = Data.product.find((z) => {
    return z.name === proname
  })

  return (
    <div className='pmain'>
      <Nav />
      <div className='pd1'>
        <div className='Pd11'>
          <img className='pimg' src={prod.photo} alt={prod.title} />
          <h1>{prod.name}</h1>
          <h1>${prod.price}</h1>
          <NavLink to={"/user"}><button>Buy Now</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Products
