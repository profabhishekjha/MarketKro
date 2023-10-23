import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Favorite from './Pages/Favorite/Favorite'
import Cart from './Pages/Cart/Cart'
import Product from './Pages/Product/Product'
import Clothes from './Pages/Clothes/Clothes'
import Shoes from './Pages/Shoes/Shoes'
import Accessories from './Pages/Accessories/Accessories'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'favorite',
        element: <Favorite />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'product/:id',
        element: <Product />
      },
      {
        path: 'clothing',
        element: <Clothes />
      },
      {
        path: 'shoes',
        element: <Shoes />
      },
      {
        path: 'accessories',
        element: <Accessories />
      }
    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
