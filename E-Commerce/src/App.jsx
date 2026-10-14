import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { Navbar } from './Component/Navbar.jsx';
import {About} from './Component/About.jsx'
import { Product } from './Component/Product.jsx';
import { SingleProduct } from './Component/SingleProduct.jsx';


 const App = () => {
  let router=createBrowserRouter([
    {
      path:'/',
      element:<Navbar/>,
      children:[{
        path:'/',
        element:<About/>
      },
      {
        path:'/Product',
      element:<Product/>
      },
      {
        path:'/Product/:id',
        element:<SingleProduct/>
      }
    ]
    }])
  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  )
}
export default App;
