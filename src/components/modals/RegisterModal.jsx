/* eslint-disable react/prop-types */
import React, { useState } from 'react';
function RegisterModal({ onClose, onLoginClick }) {
  const handleLoginClick = () => {
    onClose() // Close the LoginModal
    onLoginClick() // Open the RegisterModal
  }

  const [email, setemail] = useState()
  const [userName, setuserName] = useState()
  const [password, setpassword] = useState()
  const [reEnterPassword, setreEnterPassword] = useState();

  const obj = { userName, email, password, reEnterPassword }
  console.log(import.meta.env.VITE_REACT_APP);

  const handleSubmit = async (e) => {
    e.preventDefault()
    let postuserInfo = await fetch(`${import.meta.env.VITE_REACT_APP}/register/user`, {
      method: 'post',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    postuserInfo = await postuserInfo.json()
    localStorage.setItem('user', JSON.stringify(postuserInfo.newUser))
    localStorage.setItem('token', JSON.stringify(postuserInfo.Token))
    if (postuserInfo.Token) {
      alert('register successfully !')
    } else {
      alert(postuserInfo.msg)
    }
  }

  return (
    <div
      id="authentication-modal"
      className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-300/70 p-4  md:inset-0">
      <div className="relative max-h-full w-full max-w-md">
        {/* Modal content */}
        <div className="relative z-50 rounded-lg bg-gray-700 shadow">
          <button
            type="button"
            className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-500 bg-transparent text-sm text-black  hover:bg-gray-600 hover:text-black"
            data-modal-hide="authentication-modal"
            onClick={() => {
              onClose() // Call the onClose function to close the modal
            }}>
            <img src="/stuff/cancel.svg" alt="x" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium  text-white">Sign up to Dialkro</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" action="#">
              {/* Form inputs and submit button */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium  text-white">
                  Your email
                </label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border  border-gray-500 bg-gray-600  p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="text" className="mb-2 block text-sm font-medium  text-white">
                  Name
                </label>
                <input
                  onChange={(e) => setuserName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-lg border  border-gray-500 bg-gray-600  p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium  text-white">
                  Your password
                </label>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border  border-gray-500 bg-gray-600  p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium  text-white">
                  Re-enter your password
                </label>
                <input
                  onChange={(e) => setreEnterPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border  border-gray-500 bg-gray-600  p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="focus:ring-3 h-4 w-4 rounded border  border-gray-500 bg-gray-600 ring-offset-gray-800  focus:ring-blue-600 focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label htmlFor="remember" className="ml-2 text-sm font-medium  text-gray-300">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg  bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-800">
                Register your account
              </button>
              <div className="text-sm font-medium text-white">
                Already have an account?{' '}
                <a href="#" className=" text-blue-500 hover:underline" onClick={handleLoginClick}>
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal
