/* eslint-disable react/prop-types */
import React from 'react'

function LoginModal({ onClose, onRegisterClick }) {
  const handleRegisterClick = () => {
    onClose()
    onRegisterClick()
  }
  return (
    <div>
      <div
        id="authentication-modal"
        className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-300/70 p-4 md:inset-0">
        <div className="relative max-h-full w-full max-w-md">
          {/* Modal content */}
          <div className="relative z-50 rounded-lg bg-gray-700">
            <button
              type="button"
              className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-500 bg-transparent"
              data-modal-hide="authentication-modal"
              onClick={() => {
                onClose() // Call the onClose function to close the modal
              }}>
              <img src="/stuff/cancel.svg" alt="x" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-white">Sign in to our platform</h3>
              <form className="space-y-6" action="#">
                {/* Form inputs and submit button */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium  text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-500 bg-gray-600  p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium  text-white">
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-500 bg-gray-600  p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
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
                        className="focus:ring-3 h-4 w-4 rounded border border-gray-500 bg-gray-600 ring-offset-gray-800 focus:ring-blue-600 focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium  text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg  bg-blue-600 px-5 py-2.5 text-center text-sm font-medium  text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800">
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-300">
                  Not registered?{' '}
                  <a
                    href="#"
                    className="text-blue-500 hover:underline"
                    onClick={handleRegisterClick}>
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
