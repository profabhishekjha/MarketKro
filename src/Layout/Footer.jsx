import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <footer className=" mt-20 bg-white">
        <div className="x-auto w-full">
          <hr />
          <h2 className=" p-4 text-4xl font-semibold uppercase text-pink-400">Anav Mart</h2>
          <div className=" grid grid-cols-2 gap-8 max-md:p-5 md:grid-cols-4 md:p-10">
            <div className=" flex flex-col">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-500 ">Company</h2>
              <ul className=" font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-500 ">Help center</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-500 ">Legal</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    onClick={() => {
                      navigate('/t&c')
                    }}
                    className="cursor-pointer hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-500">
                Meet the Developers
              </h2>
              <ul className="font-small text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com/profabhishekjha" target="_blank" rel="noreferrer">
                    Abhishek Jha
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/riturajmahapatra" target="_blank" rel="noreferrer">
                    Rituraj S Mahapatra
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/kumarsushilroy" target="_blank" rel="noreferrer">
                    Sushil Kumar
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-pink-100 px-4 py-6 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2023 Anav Mart. All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-5 sm:justify-center md:mt-0">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900">
                <img src="/socials/facebook.svg" alt="socials" className="h-5  w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900">
                <img src="/socials/instagram.svg" alt="socials" className="h-5  w-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900">
                <img src="/socials/twitter.svg" alt="socials" className="h-5  w-5" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900">
                <img src="/socials/youtube.svg" alt="socials" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
