import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from '../components/ScrollToTop'

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
