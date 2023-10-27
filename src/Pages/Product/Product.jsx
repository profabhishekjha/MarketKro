import { CustomerReviews } from './components/ProductFunc'
import {
  ProductDetails,
  ProductFilters,
  ProductHighlights,
  ProductImage,
  ProductReviewsData
} from './components/ProductComp'
import { AddCartFunc, AddFavoriteFunc } from '../../components/Card/Card-Function'

const Product = () => {
  const { handleCartClick } = AddCartFunc(false)
  const { isFavorite, handleFavoriteClick } = AddFavoriteFunc(false)
  const comment = `This is a very good product. I like it very much. I will buy it again.This is a very good product. I like it very much. I will buy it again.This is a very good product. I like it very much. I will buy it again.This is a very good product. I like it very much. I will buy it again.This is a very good product. I like it very much. I will buy it again.This is a very good product.`

  return (
    <main className="red mx-10 flex min-h-screen gap-10 py-10 max-md:flex-col">
      <div className="red flex h-fit  flex-col  gap-5 max-md:w-full">
        <ProductImage
          handleCartClick={handleCartClick}
          isFavorite={isFavorite}
          handleFavoriteClick={handleFavoriteClick}
        />
      </div>

      {/* product description on right side */}
      <div className="red ">
        <ProductDetails />

        {/* Products Filter For Color and size */}
        <ProductFilters />

        {/* Product details table */}
        <ProductHighlights />

        {/* Overall Review and Ratings */}
        <ProductReviewsData />

        {/* Customer reviews and comments */}
        <div className="flex flex-col">
          <span className="mb-5 text-3xl font-bold">Customer Reviews</span>
          <CustomerReviews
            comment={comment}
            Name="Sachin Yadav"
            rating={4.5}
            userImage="https://loremflickr.com/cache/resized/65535_52750893698_5b1c16297f_c_640_480_nofilter.jpg"
          />
          <CustomerReviews
            comment={comment}
            Name="Abhishek Jha"
            rating={3.4}
            userImage="https://fastly.picsum.photos/id/838/640/480.jpg?hmac=2QcoWqBUG3DmpzyUOpzW-50L-Rj41gXyhKQkvmFy7eo"
          />
          <CustomerReviews
            comment={
              'Hello this is a comment from the user and this is a very good product and I like it very much. I will buy it again.'
            }
            Name="Rituraj"
            rating={1.4}
            userImage="https://loremflickr.com/cache/resized/65535_52656597110_2c703b8f1e_c_640_480_nofilter.jpg"
          />
        </div>
      </div>
    </main>
  )
}

export default Product
