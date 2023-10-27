import { useNavigate } from 'react-router-dom'

const Card = ({ heading, image }) => {
  const navigate = useNavigate()

  return (
    <>
      {/* card */}
      <div className=" flex flex-col justify-center rounded-xl border border-slate-200 p-2">
        {/* image */}
        <div className="relative  flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl">
          <div
            onClick={() => {
              navigate(`/product/${heading}`)
            }}
            className=" w-40 overflow-hidden rounded-lg max-md:w-full  ">
            <img
              src={image}
              alt="Cards"
              className=" transform rounded-lg object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className=" flex w-40 justify-start gap-1 truncate max-md:w-full max-md:justify-center ">
            <span className="w-full text-center text-sm font-medium max-md:text-lg max-md:font-semibold">
              {heading}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
