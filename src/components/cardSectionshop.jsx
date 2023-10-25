/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import { Heart } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import LoginModal from '../components/modals/LoginModal' // Adjust the path as needed
import RegisterModal from '../components/modals/RegisterModal' // Adjust the path as needed

const CardSection = ({ onClick, images, title, description, price, companyName }) => {
  const [value] = React.useState(3)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [openToggle, setOpenToggle] = useState(null)
  const navigate = useNavigate()

  if (isLoggedIn === 'access') {
    setIsLoggedIn(true)
  }

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true)
  }

  const handleOrderNowClick = () => {
    navigate(`/product/${title}`)
  }

  return (
    <div>
      <div className="mx-auto w-80 overflow-hidden rounded-lg border-2 duration-500 hover:scale-105">
        <div className=" flex flex-col gap-5 p-5">
          <div className=" h-60 overflow-hidden bg-white shadow-lg">
            <img
              className="h-60 w-72 cursor-pointer rounded-lg object-cover max-md:w-full"
              onClick={handleOrderNowClick}
              src={images}
              alt="Card Image"
            />
          </div>
          <div className=" h-[20vh] gap-5 ">
            <div className="">
              <p
                onClick={handleOrderNowClick}
                className="cursor-pointer truncate text-xl font-bold capitalize">
                {' '}
                {title}{' '}
              </p>
              <Rating name="read-only" value={value} readOnly />
              <p className="cursor-pointer text-lg font-bold uppercase">{companyName}</p>
              <p className=" w-3/4 max-md:h-[7vh] max-md:w-[78vw]">{description}</p>
              <h1 className=" text-xl font-bold">₹ {price}</h1>
            </div>

            {/* ... (other JSX code) */}

            {isLoginModalOpen && (
              <LoginModal
                onClose={() => {
                  setIsLoginModalOpen(false) // Close the LoginModal
                }}
                onRegisterClick={openRegisterModal}
              />
            )}
            {isRegisterModalOpen && (
              <RegisterModal
                onClose={() => {
                  setIsRegisterModalOpen(false) // Close the RegisterModal
                }}
                onLoginClick={() => {
                  setIsLoginModalOpen(true) // Open the LoginModal
                }}
              />
            )}
            {/* ... (other JSX code) */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSection
