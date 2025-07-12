import React from 'react'
import Nav from './Nav'
import './userid.css'

function Userid() {
  return (
    <div>
      <Nav />
      <div className='umain'>
        <div className='ud1'>
          <h3>Enter Username</h3>
          <input type='text'/>
          <h3>Enter password</h3>
          <input type='password' />
          <button><h2>SignUp</h2></button>
        </div>
      </div>
    </div>
  )
}

export default Userid
