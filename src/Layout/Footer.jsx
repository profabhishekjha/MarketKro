import logo from '/Images/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="flex h-52 items-center justify-between border-t px-10 pt-5">
      <div>
        <Link href={'/'}>
          <div className="flex items-center gap-6 ">
            <img src={logo} alt="Market Kro Logo" className="aspect-auto h-24 w-auto" />
            <span className="text-4xl font-bold">Anav Mart</span>
          </div>
        </Link>
      </div>

      {/* Social media links */}
      <div className="flex w-1/2 justify-around">
        <div className="flex flex-col gap-3">
          <span className="text-xl font-semibold">Pages links</span>
          <span>
            <Link className="link" href={'/favorite'}>
              Favorites
            </Link>
          </span>
          <span>
            <Link className="link" href={'/cart'}>
              Cart
            </Link>
          </span>
          <span>
            <Link className="link" href={'/'}>
              LinkedIn
            </Link>
          </span>
          <span>
            <Link className="link" href={'/'}>
              Facebook
            </Link>
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span>
            <Link className="link" href={'/'}>
              Privacy policy
            </Link>
          </span>
          <span>
            <Link className="link" href={'/'}>
              Terms & Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
