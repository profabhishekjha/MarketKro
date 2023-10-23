import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
const Dropdown = () => {
  const [suggestions, setSuggestions] = useState([])
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(false)
  const navigate = useNavigate()
  const dropdownRef = useRef(null)
  const categories = [
    'Clothing',
    'Shoes',
    'Accessories',
    'Food',
    'Medicine',
    'Footwear',
    'Electronics',
    'Toys',
    'Furniture'
  ]
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      // Redirect to the first suggestion
      navigate(`/${suggestions[0].toLowerCase()}`)
      setSuggestions([])
    }
  }
  const handleAllCategoryItemClick = (category) => {
    // Handle click on an item within the "All categories" submenu
    navigate(`/${category.toLowerCase()}`)
    setSuggestions([])
    setIsAllCategoriesOpen(false)
  }
  const handleAllCategoriesClick = () => {
    // Toggle the dropdown state
    setIsAllCategoriesOpen(!isAllCategoriesOpen)
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click occurred outside the dropdown, close it
      setIsAllCategoriesOpen(false)
    }
  }
  return (
    <div className="z-20" ref={dropdownRef}>
      <form className="flex items-center justify-center">
        <div className="flex ">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            type="button"
            className="flex items-center justify-center rounded-lg border px-4 py-2"
            onClick={handleAllCategoriesClick}>
            All categories
            <svg
              className={`ml-2.5 h-2.5 w-2.5 ${
                isAllCategoriesOpen ? 'rotate-180 transform' : '' // Rotate the arrow based on dropdown state
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className={`no-scrollbar z-10 ${
              isAllCategoriesOpen ? 'block' : 'hidden'
            } right-100 absolute top-7 mt-8 max-h-60 w-36 divide-y divide-gray-100 overflow-y-auto rounded-lg bg-white shadow dark:bg-white`}>
            {' '}
            <ul
              className="py-2 text-sm text-gray-700 dark:text-black"
              aria-labelledby="dropdown-button">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleAllCategoryItemClick(category)}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Dropdown
