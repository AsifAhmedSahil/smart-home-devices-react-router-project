import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Shop from "./Shop"
import Cart from "./Cart"
import Root from './Root'
import ErrorPage from './ErrorPage'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        loader:()=>fetch('products.json'),
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/shop',
                element:<Shop/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
        ]
    }
])



export default router