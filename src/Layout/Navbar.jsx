import { useEffect, useState } from 'react'
import logo from '/Images/logo.png'
import { Link } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    // Function to check the viewport width and update isOpen
    const checkViewportWidth = () => {
      const isMdOrLarger = window.innerWidth >= 768 // Adjust this value as needed
      if (isMdOrLarger && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', checkViewportWidth)

    checkViewportWidth()

    return () => {
      window.removeEventListener('resize', checkViewportWidth)
    }
  }, [isOpen])
  return (
    <nav className="">
      {/* Logo */}
      <div className="flex items-center justify-between border-b px-10 max-sm:px-2">
        <div>
          <Link to={'/'} className="flex w-auto items-center gap-3">
            <img src={logo} alt="Market Kro Logo" className="aspect-auto h-20 w-auto" />
            <span className="text-2xl font-bold">MarketKro</span>
          </Link>
        </div>
        <div className="flex items-center gap-10 max-sm:gap-5">
          <div className="flex items-center gap-10 max-md:hidden">
            <Link to={'favorite'}>Favorite</Link>
            <Link to={'cart'}>Cart</Link>
            <Dropdown />
          </div>
          <button>
            <Link to={'/'}>SignIn</Link>
          </button>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex items-baseline justify-between gap-5 border-b px-10 py-5">
          <Link className="" href={'/favorite'}>
            Favorite
          </Link>
          <Link className="" href={'/cart'}>
            Cart
          </Link>
          <Dropdown />
        </div>
      )}
    </nav>
  )
}

export default Navbar
