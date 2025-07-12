import React, { useState } from 'react'
import Nav from './Nav'
import Data from './data'
import './home.css'
import { NavLink } from 'react-router-dom'

function Home({ adincart2 }) {

    let [search, setsearch] = useState('')

    let s = Data.product.filter((d) => {
        return d.name.includes(search)
    })

    return (
        <div className='main'>
            <Nav />
            <input placeholder='Search....' onChange={(x) => setsearch(x.target.value)} />
            <div className='hd1'>

            </div>
            <div className='hd2'>
                {
                    s.map((p) => {
                        if (search !== '') {
                            return (
                                <div className='hd21'>
                                    <NavLink className='himg' to={`/products/${p.name}`}>
                                        <img src={p.photo} alt={p.title} />
                                    </NavLink>
                                    <div className='htxt'>
                                        <h1>{p.name}</h1>
                                        <h1>${p.price}</h1>
                                        <button onClick={() => {
                                            adincart2(p)
                                            alert("your item added to cart succesfully")
                                        }}>Add to cart</button>

                                    </div>

                                </div>
                            )
                        }
                        return null;
                    })
                }


                {
                    Data.product.map((p) => {
                        if (search === '') {
                            return (
                                <div className='hd21'>
                                    <NavLink className='himg' to={`/products/${p.name}`}>
                                        <img src={p.photo} alt={p.title} />
                                    </NavLink>
                                    <div className='htxt'>
                                        <h1>{p.name}</h1>
                                        <h1>${p.price}</h1>
                                        <button onClick={() => {
                                            adincart2(p)
                                            alert("your item added to cart succesfully")
                                        }}>Add to cart</button>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })
                }
            </div>

            <div className='hd3'>
                <div className='hd301'>
                    <h2>Receive an exclusive <span>40%</span> discount code when you</h2> <br />
                    <NavLink to={"/user"}><button><h1>SignUp !!</h1></button></NavLink>
                </div>

                <div className='hd30'>
                    <div className='hd31'>
                        <h3>Company</h3>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>carrers</p>
                        <p>Locstions</p>
                    </div>

                    <div className='hd31'>
                        <h3>Customer Care</h3>
                        <p>Size Guide</p>
                        <p>Help & FAQs</p>
                        <p>Return My Order</p>
                        <p>Refer a Friend</p>
                    </div>

                    <div className='hd31'>
                        <h3>Term & Policies</h3>
                        <p>Duties & Taxes</p>
                        <p>Shipping info</p>
                        <p>Privacy Policy</p>
                        <p>Terms conditions</p>
                    </div>


                    <div className='hd31'>
                        <h3>Follow us !</h3>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Pinterest</p>
                        <p>Youtube</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
