import { useState } from 'react'
import { ShoppingCart } from './ShoppingCart'

function CheckoutPage() {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zipcode: ''
  })

  const [paymentInfo, setPaymentInfo] = useState({
    card: '',
    expiry: '',
    cvv: ''
  })

  const handleShippingChange = (e) => {
    const { name, value } = e.target
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    })
  }

  const handlePaymentChange = (e) => {
    const { name, value } = e.target
    setPaymentInfo({
      ...paymentInfo,
      [name]: value
    })
  }

  const handlePlaceOrder = () => {
    // Handle placing the order here
    console.log('Shipping Info:', shippingInfo)
    console.log('Payment Info:', paymentInfo)
  }
  const cart = [
    { id: 1, name: 'Product 1', price: 20, quantity: 1 },
    { id: 2, name: 'Product 2', price: 30, quantity: 2 },
    { id: 3, name: 'Product 3', price: 25, quantity: 1 }
  ]
  return (
    <>
      <div className="container mx-auto p-8 max-md:p-0">
        <h2 className=" ml-4 mt-4 text-2xl font-bold">Your Cart</h2>
        <ShoppingCart />
        {cart.length > 0 && (
          <>
            <div className="mt-4"></div>
            <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
              <h2 className="text-lg font-semibold">Shipping Information</h2>
              <form>
                <div className="mt-4">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border p-2"
                    placeholder="John Doe"
                    value={shippingInfo.name}
                    onChange={handleShippingChange}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="address" className="block text-sm font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full rounded-lg border p-2"
                    placeholder="123 Main St"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="city" className="block text-sm font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full rounded-lg border p-2"
                    placeholder="Your City"
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="zipcode" className="block text-sm font-medium">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    className="w-full rounded-lg border p-2"
                    placeholder="12345"
                    value={shippingInfo.zipcode}
                    onChange={handleShippingChange}
                  />
                </div>
              </form>
            </div>
            <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
              <h2 className="text-lg font-semibold">Payment Information</h2>
              <form className="flex gap-10">
                <div className="mt-4">
                  <label htmlFor="card" className="block text-sm font-medium">
                    Credit Card Number
                  </label>
                  <input
                    type="text"
                    id="card"
                    name="card"
                    className=" w-full rounded-lg border p-2"
                    placeholder="1234 5678 9012 3456"
                    value={paymentInfo.card}
                    onChange={handlePaymentChange}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="expiry" className="block text-sm font-medium">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    className="w-full rounded-lg border p-2"
                    placeholder="MM / YY"
                    value={paymentInfo.expiry}
                    onChange={handlePaymentChange}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="cvv" className="block text-sm font-medium">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    className="w-full rounded-lg border p-2"
                    placeholder="123"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentChange}
                  />
                </div>
              </form>
            </div>

            {/* Place Order Button */}
            <div className="mt-8 text-center">
              <button
                className="w-[30%] rounded-lg bg-blue-500 p-2 px-4 text-white hover:bg-blue-600 max-md:w-full"
                onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CheckoutPage
