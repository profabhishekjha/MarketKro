import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClothChoice = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className=" mx-auto mt-10 w-full">
        <div className="mx-auto grid w-[95%] grid-cols-4 items-center justify-center gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div
            onClick={() => navigate('/clothing/mens')}
            className="relative flex h-[80vh] w-[22vw] cursor-pointer items-center justify-center rounded-lg border border-black bg-black text-white duration-500 hover:scale-95 max-lg:w-full">
            {' '}
            <p className="absolute left-[25%] top-[45%] text-4xl font-bold duration-500 hover:scale-110">
              Men's Wear
            </p>
            <img src="/Images/mens.jpg" alt="" className="h-full w-full rounded-lg object-cover" />
          </div>
          <div
            onClick={() => navigate('/clothing/womens')}
            className="relative flex h-[80vh] w-[22vw] cursor-pointer items-center justify-center rounded-lg border border-black bg-pink-400 text-white duration-500 hover:scale-95 max-lg:w-full">
            <p className=" absolute left-[15%] top-[45%] text-4xl duration-500 hover:scale-110">
              Women's Wear
            </p>
            <img src="/Images/women.jpg" alt="" className="h-full w-full rounded-lg object-cover" />
          </div>
          <div
            onClick={() => navigate('/clothing/girls')}
            className="relative flex h-[80vh] w-[22vw] cursor-pointer items-center justify-center rounded-lg border border-black bg-yellow-400 text-white duration-500 hover:scale-95 max-lg:w-full">
            <p className="absolute left-[25%] top-[45%] text-4xl duration-500 hover:scale-110">
              Girl's Wear
            </p>
            <img src="/Images/girls.jpg" alt="" className="h-full rounded-lg object-cover" />
          </div>
          <div
            onClick={() => navigate('/clothing/boys')}
            className="relative flex h-[80vh] w-[22vw] cursor-pointer items-center justify-center bg-orange-400 text-white duration-500 hover:scale-95 max-lg:w-full">
            <p className="absolute left-[25%] top-[45%] text-4xl font-bold duration-500 hover:scale-110">
              Boy's Wear
            </p>
            <img src="/Images/boys.jpg" alt="" className="h-full rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ClothChoice
