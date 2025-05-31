import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../providers/cart.providers.js";

export default function CartModal() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const updateQuantity = (slug, newQuantity) => {
    if (newQuantity === 0) {
      setCart((prev) => prev.filter((item) => item.slug !== slug));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.slug === slug ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeAll = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setIsVisible(false);
    navigate("/checkout");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative w-[377px] bg-white rounded-lg shadow-xl mt-16 mr-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide">
              Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
            </h2>
            <div className="flex items-center gap-4">
              {cart.length > 0 && (
                <button
                  onClick={removeAll}
                  className="text-gray-500 hover:text-gray-700 underline text-sm transition-colors"
                >
                  Remove all
                </button>
              )}
              
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                aria-label="Close cart"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-4 mb-6 max-h-[280px] overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <p className="text-sm text-gray-400">
                  Add some products to get started
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.slug} className="flex items-center gap-4">
                  <img
                    src={item.image.desktop}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-black">
                      {item.name
                        .replace(/headphones|earphones|speaker/i, "")
                        .trim()}
                    </h3>
                    <p className="text-gray-500 text-sm font-bold">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center bg-[#F1F1F1] rounded">
                    <button
                      onClick={() =>
                        updateQuantity(item.slug, item.quantity - 1)
                      }
                      className="text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center text-sm"
                    >
                      −
                    </button>
                    <span className="text-black font-bold text-sm w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.slug, item.quantity + 1)
                      }
                      className="text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-6 pt-4 border-t">
                <span className="text-gray-500 text-sm uppercase tracking-wide">
                  Total
                </span>
                <span className="text-black font-bold text-lg">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-[#D87D4A] text-white py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#FBAF85] transition-colors duration-200"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
