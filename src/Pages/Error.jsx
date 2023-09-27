import { Link } from 'react-router-dom'

import Blob from '/Svgs/Blob.svg'
import Cart from '/Svgs/Cart.svg'

const Error = () => {
  return (
    <main className="relative mx-10 flex min-h-screen items-center justify-between">
      {/* Message */}
      <div className="absolute -left-52 -top-10 -z-10 aspect-square h-[40vw]">
        <img src={Blob} alt="Blob" style={{ objectFit: 'contain' }} />
      </div>
      <div className="flex w-1/2 flex-col gap-4 pl-40">
        <div className="flex flex-col">
          <span className="text-6xl font-bold">{`Product not available`}</span>
          {/* <span className="text-4xl font-bold">{`Ooops!`}</span> */}
          {/* <span className="text-4xl font-bold">{`Product not available`}</span> */}
          <span className="pt-3 text-gray-400">{`This product is not available or removed!`}</span>
          <span className="pb-3 text-gray-400">{`We suggest you go back to home page.`}</span>
        </div>
        <button className="w-fit rounded-3xl border-2 border-black bg-purple-300 px-3 py-2 text-lg font-semibold active:bg-purple-400">
          <Link href={'/'}>Back to Home</Link>
        </button>
      </div>
      {/* Robot Image */}
      <div></div>
      <div className="relative mr-20 aspect-square h-[25vw]">
        <img src={Cart} alt="Not Found Robot" style={{ objectFit: 'contain' }} />
      </div>
      <div className="absolute right-10 top-10 -z-10 aspect-square h-[40vw]">
        <img
          src={Blob}
          alt="Blob2"
          style={{ objectFit: 'contain', opacity: '0.5', rotate: '80deg' }}
        />
      </div>
    </main>
  )
}

export default Error
