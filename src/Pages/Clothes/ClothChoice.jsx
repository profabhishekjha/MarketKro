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
            className=" flex h-[80vh] w-[22vw] cursor-pointer items-center justify-center bg-black text-white duration-500 hover:scale-95 max-lg:w-full">
            {' '}
            <p className=" text-4xl">Men's Wear</p>
          </div>
          <div
            onClick={() => navigate('/clothing/womens')}
            className=" flex h-[80vh] w-[22vw] cursor-pointer items-center justify-center bg-pink-400 text-white duration-500 hover:scale-95 max-lg:w-full">
            <p className=" text-4xl">Women's Wear</p>
          </div>
          <div
            onClick={() => navigate('/clothing/girls')}
            className=" flex h-[80vh] w-[22vw] cursor-pointer items-center justify-center bg-yellow-400 text-white duration-500 hover:scale-95 max-lg:w-full">
            <p className=" text-4xl">Girl's Wear</p>
          </div>
          <div
            onClick={() => navigate('/clothing/boys')}
            className=" flex h-[80vh] w-[22vw] cursor-pointer items-center justify-center bg-orange-400 text-white duration-500 hover:scale-95 max-lg:w-full">
            <p className=" text-4xl">Boy's Wear</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClothChoice
