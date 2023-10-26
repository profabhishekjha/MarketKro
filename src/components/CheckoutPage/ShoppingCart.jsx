import React, { useState } from 'react'

export function ShoppingCart() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 20, img: '/Images/jonny.jpeg', quantity: 1 },
    { id: 2, name: 'Product 2', price: 30, img: '/Images/andrew.jpg', quantity: 2 },
    { id: 3, name: 'Product 3', price: 25, img: '/Images/rock.jpg', quantity: 1 }
  ])

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCart(updatedCart)
  }

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )
    setCart(updatedCart)
  }

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="container mx-auto p-8 max-md:p-5">
      <h2 className="mb-4 text-lg font-semibold">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items here</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className=" mb-4 rounded-lg border p-4 shadow-md max-md:h-[55vh] max-md:w-full">
            <div className="flex items-center justify-between max-md:flex-col">
              <div className="">
                <img
                  src={item.img} // Placeholder image
                  alt={item.name}
                  className="h-[180px] w-[200px] rounded-lg object-cover"
                />
                <div className="mt-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="rounded-md bg-blue-500 p-1 px-3 text-white hover:bg-blue-600">
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="rounded-md bg-blue-500 p-1 px-3 text-white hover:bg-blue-600">
                  +
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="ml-5 rounded-md bg-red-500 p-2 px-4 text-white hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="text-right">
        <p className="text-lg font-semibold">Total: ₹{calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  )
}
