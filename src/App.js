import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Products from './pages/Products'
import Pages from './pages/Pages'
import Blog from './pages/Blog'
import Userid from './pages/Userid'

function App() {
  const [cart,setcart]= useState([])

  let adincart=(x)=>{
    setcart((p)=>[...p,x])
  }

  let a = createBrowserRouter([
    {
      path:'/',
      element:<Home adincart2={adincart}/>
    },
    {
      path:'/shop',
      element:<Shop c={cart}/>
    },
    {
      path:'/products/:proname',
      element:<Products/>
    },
    {
      path:'/pages',
      element:<Pages/>
    },
    {
      path:'/blog',
      element:<Blog/>
    },
    {
      path:'/user',
      element:<Userid/>
    }
  ])
  return (
    <div>
      <RouterProvider router={a}/>
    </div>
  )
}

export default App

















// import React, { useState } from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './pages/Home'
// import Cart from './pages/Cart'
// import Detail from './pages/Detail'

// function App() {

//   const [kart,setkart]=useState([])

//   let addcart = (x)=>{
//     setkart((p)=>[...p,x])
//   }


//   let a = createBrowserRouter([
//     {
//       path:'/',
//       element:<Home addcart={addcart}/>
//     },
//     {
//       path:'/cart',
//       element:<Cart c={kart}/>
//     },
//     {
//       path:'/detail/:abc',
//       element:<Detail/>
//     }
//     ])
//   return (
//     <div>
//       <RouterProvider router={a}/>
//     </div>
//   )
// }

// export default App
