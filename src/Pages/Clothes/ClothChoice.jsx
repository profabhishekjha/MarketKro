import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClothChoice = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="mt-10 flex items-center justify-center gap-4">
        <div
          onClick={() => navigate('/clothing/mens')}
          className="redborder flex h-[80vh] w-[45vw] cursor-pointer items-center justify-center bg-black text-white duration-500 hover:scale-95">
          {' '}
          <p className=" text-4xl">Men's Wear</p>
        </div>
        <div
          onClick={() => navigate('/clothing/womens')}
          className="redborder flex h-[80vh] w-[45vw] cursor-pointer items-center justify-center bg-pink-400 text-white duration-500 hover:scale-95">
          <p className=" text-4xl">Women's Wear</p>
        </div>
        <div
          onClick={() => navigate('/clothing/girls')}
          className="redborder flex h-[80vh] w-[45vw] cursor-pointer items-center justify-center bg-yellow-400 text-white duration-500 hover:scale-95">
          <p className=" text-4xl">Girl's Wear</p>
        </div>
        <div
          onClick={() => navigate('/clothing/boys')}
          className="redborder flex h-[80vh] w-[45vw] cursor-pointer items-center justify-center bg-orange-400 text-white duration-500 hover:scale-95">
          <p className=" text-4xl">Boy's Wear</p>
        </div>
      </div>
    </>
  )
}

export default ClothChoice
