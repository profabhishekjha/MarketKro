import React from 'react'
import CardSection from '../../components/cardSectionshop'
import { useNavigate } from 'react-router-dom'

const Accessories = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5">
      <CardSection onClick={() => navigate('/cart')} />
      <CardSection onClick={() => navigate('/cart')} />
      <CardSection onClick={() => navigate('/cart')} />
      <CardSection onClick={() => navigate('/cart')} />
      <CardSection onClick={() => navigate('/cart')} />
      <CardSection onClick={() => navigate('/cart')} />
    </div>
  )
}

export default Accessories
