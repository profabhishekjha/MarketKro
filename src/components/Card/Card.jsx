import { Heart, ShoppingCart } from 'lucide-react'
import { AddCartFunc, AddFavoriteFunc } from './Card-Function'
import RenderStars from './CardRating'
import { useNavigate } from 'react-router-dom'

const Card = ({ heading, image }) => {
  const navigate = useNavigate()

  return (
    <>
      {/* card */}
      <div className="my-card redborder flex flex-col rounded-xl p-2">
        {/* image */}
        <div className="relative  flex cursor-pointer items-center justify-center rounded-xl">
          <div
            onClick={() => {
              navigate(`/product/${heading}`)
            }}
            className=" overflow-hidden rounded-lg max-md:h-52  ">
            <img
              src={image}
              alt="Cards"
              className=" transform rounded-lg object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        <div className="my-4 flex flex-col items-center justify-between px-1">
          <div className="flex flex-col justify-between gap-1 ">
            <span className="text-md font-semibold">{heading}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
