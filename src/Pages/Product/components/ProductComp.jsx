import { Heart, ShoppingCart, Wallet, BadgeCheck } from 'lucide-react'
import RenderStars from '../../../components/Card/CardRating'
import { Link } from 'react-router-dom'

export const ProductImage = ({ handleFavoriteClick, isFavorite, handleCartClick }) => {
  return (
    <>
      <div className="relative">
        <img
          src="https://loremflickr.com/cache/resized/65535_52682151570_91793b7a9a_c_640_480_nofilter.jpg"
          alt="Product Image"
          className="w-full rounded-lg object-cover"
        />
        <div onClick={handleFavoriteClick} className={`absolute right-2 top-2 w-6 cursor-pointer`}>
          <Heart
            color={`${isFavorite ? 'red' : 'white'}`}
            fill={`${isFavorite ? 'red' : 'white'}`}
          />
        </div>
      </div>
      {/* Product Buttons */}
      <div className="flex justify-between gap-5">
        {/* Add to cart */}
        <button
          onClick={handleCartClick}
          className="flex h-fit  w-fit items-center gap-3 rounded-md bg-[#f27059] p-3 text-lg font-bold text-white active:bg-[#cc7f00]">
          Add to Cart <ShoppingCart />
        </button>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xl font-bold">{`₹200`}</span>
          <Link to={'/cart'}>
            <button className="flex h-fit w-fit items-center gap-3 rounded-md bg-[#ef6351] p-3 text-lg font-bold text-white active:bg-[#c74f15]">
              Buy Now <Wallet />
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

// ----------------------------------------------------

export const ProductDetails = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-4xl font-bold">{'Red Cat'}</span>
        <span className="text-lg">
          {'This is a red cat if you want to buy it then buy it otherwise me mummy se kah doonga'}
        </span>
        <span className="text-3xl font-semibold">{`₹200`}</span>
        {/* <div className="flex gap-1">
              <RenderStars rating={3.5} />
              <span className="text-xl font-semibold text-yellow-500">{`(7458 reviews)`}</span>
            </div> */}
        <span className="text-lg font-bold italic text-blue-600">
          Assured by MarketKro
          <BadgeCheck className="ml-2 inline-block h-6 text-green-500" />
        </span>
      </div>
      {/* <Separator className="my-3 mb-10" /> */}
      <div className='my-3 mb-10'></div>
    </>
  )
}

// ----------------------------------------------------
export const ProductFilters = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="mb-5 text-3xl font-bold">Product Filters</span>
        <div className="flex items-center gap-10">
          <span className="text-xl font-semibold">Color</span>
          <div className="flex gap-3">
            <button className="flex items-center justify-between gap-2 rounded-md border px-1 active:bg-gray-300">
              <div className="h-4 w-4 rounded-full border-black bg-red-500"></div>
              <span className="text-base font-semibold">Red</span>
            </button>
            <button className="flex items-center justify-between gap-2 rounded-md border px-1 active:bg-gray-300">
              <div className="h-4 w-4 rounded-full border-black bg-blue-500"></div>
              <span className="text-base font-semibold">Blue</span>
            </button>
            <button className="flex items-center justify-between gap-2 rounded-md border px-1 active:bg-gray-300">
              <div className="h-4 w-4 rounded-full border-black bg-green-500"></div>
              <span className="text-base font-semibold">Green</span>
            </button>
            <button className="flex items-center justify-between gap-2 rounded-md border px-1 active:bg-gray-300">
              <div className="h-4 w-4 rounded-full border-black bg-yellow-500"></div>
              <span className="text-base font-semibold">Yellow</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <span className="text-xl font-semibold">Size</span>
          <div className="flex gap-3">
            <button className="w-10 rounded-md border px-2 text-base font-semibold active:bg-gray-300">
              SM
            </button>
            <button className="w-10 rounded-md border px-2 text-base font-semibold active:bg-gray-300">
              M
            </button>
            <button className="w-10 rounded-md border px-2 text-base font-semibold active:bg-gray-300">
              L
            </button>
            <button className="w-10 rounded-md border px-2 text-base font-semibold active:bg-gray-300">
              XL
            </button>
            <button className="w-10 rounded-md border px-2 text-base font-semibold active:bg-gray-300">
              2XL
            </button>
          </div>
        </div>
      </div>
      {/* <Separator className="my-3 mb-10" /> */}
      <div className='my-3 mb-10'></div>

    </>
  )
}

// ----------------------------------------------------

export const ProductHighlights = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="mb-5 text-3xl font-bold">Product Highlights</span>
        <ul className="ml-20 list-disc text-base font-semibold ">
          <li>{`ZARA - Mens wear - T-shirt Red color Large`}</li>
          <li>{`5 Months Warranty`}</li>
          <li>{`One week replacement policy`}</li>
          <li>{`Free Shipping`}</li>
          <li>{`Cash on Delivery available`}</li>
        </ul>
      </div>
      {/* <Separator className="my-3 mb-10" /> */}
      <div className='my-3 mb-10'></div>

    </>
  )
}

// ----------------------------------------------------
export const ProductReviewsData = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <span className="text-3xl font-bold">Reviews</span>
        <div className="flex gap-2">
          {/* Total Reviews */}
          <div className=" flex flex-col gap-2">
            <span className="text-xl font-semibold">Total Reviews</span>
            <span className="text-2xl font-semibold">{`74.1K`}</span>
            <span className="text-gray-400">Growth in reviews on this year</span>
          </div>

          <div className="mx-5 border"></div>

          <div className=" flex flex-col gap-2">
            <span className="text-xl font-semibold">Average Rating</span>
            <span className="flex gap-2 text-2xl font-semibold">
              {`3.5`}
              <RenderStars rating={3.5} />
            </span>
            <span className="text-gray-400">Average rating on this year</span>
          </div>
        </div>
      </div>
      {/* <Separator className="my-3 mb-10" /> */}
      <div className='my-3 mb-10'></div>

    </>
  )
}
