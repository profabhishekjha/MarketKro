import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Cart from './Pages/Cart/Cart'
import Favorite from './Pages/Favorite/Favorite'
import Product from './Pages/Product/Product'
import Clothes from './Pages/Clothes/Clothes'
import Shoes from './Pages/Shoes/Shoes'
import Accessories from './Pages/Accessories/Accessories'
import CheckoutPage from './components/CheckoutPage/CheckoutPage'
import Medicine from './Pages/Medicine/Medicine'
import Footwear from './Pages/Footwear/Footwear'
import ClothChoice from './Pages/Clothes/ClothChoice'
import Electronics from './Pages/Electronics/Electronics'
import Toys from './Pages/Toys/Toys'
import Furniture from './Pages/Furniture/Furniture'

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
        path: 'product/:id',
        element: <Product />
      },
      {
        path: 'clothing',
        element: <ClothChoice />
      },
      {
        path: 'clothing/:name',
        element: <Clothes />
      },
      {
        path: 'shoes',
        element: <Shoes />
      },
      {
        path: 'accessories',
        element: <Accessories />
      },
      {
        path: 'medicine',
        element: <Medicine />
      },
      {
        path: 'footwear',
        element: <Footwear />
      },
      {
        path: 'electronics',
        element: <Electronics />
      },
      {
        path: 'toys',
        element: <Toys />
      },
      {
        path: 'furniture',
        element: <Furniture />
      },
      {
        path: 'cart',
        element: <CheckoutPage />
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

/* App Routing */
