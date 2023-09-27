import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Favorite from './Pages/Favorite/Favorite'
import Cart from './Pages/Cart/Cart'
import Product from './Pages/Product/Product'

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
