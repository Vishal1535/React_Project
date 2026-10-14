import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { NavBar } from './Component/NavBar'
import { Home } from './Component/Section/Home'

import { RouterProvider } from 'react-router-dom'
import { ShopItem } from './Component/Section/ShopItem'
import AllItem from './Component/Product_JS/AllItems'
import { SIngleProduct } from './Component/Section/SIngleProduct'
import { useSelector } from 'react-redux'
import { Cart } from './Component/Section/Cart'






function App() {
  let route=createBrowserRouter([
    {
      path:'/',
      element:<NavBar/>,
      children:[{
        path:'/',
        element:<Home/>
      },
       {
        path:'/:id',
        element:<SIngleProduct/>

      },
      {
        path:'/kids',
        element:<ShopItem Product={AllItem} category={"kids"}/>
      },
      {
        path:'/kids/:id',
        element:<SIngleProduct/>

      },
      {
        path:'/mens',
        element:<ShopItem Product={AllItem} category={"boys"}/>
      },
        {
        path:'/mens/:id',
        element:<SIngleProduct/>

      },
      {
        path:'/women',
        element:<ShopItem Product={AllItem} category={"girls"}/>
      },
       {
        path:'/women/:id',
        element:<SIngleProduct/>

      },
      

    ]
    }
  ])
let data=useSelector((state)=>state.SliceReducer.data)
let Showcart=useSelector((state)=>state.SliceReducer.Showcart)

  return (
   <>
    {Showcart&&<Cart/>}
    <RouterProvider router={route}></RouterProvider>
   </>
  )
}

export default App
