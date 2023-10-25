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
import CheckoutPage from './components/CheckoutPage/CheckoutPage'
import Medicine from './Pages/Medicine/Medicine'
import Footwear from './Pages/Footwear/Footwear'

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
