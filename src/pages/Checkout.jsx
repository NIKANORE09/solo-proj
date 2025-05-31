import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../providers/cart.providers.js";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping + vat;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOrderConfirmation(true);
  };

  const handleOrderComplete = () => {
    setCart([]);
    setShowOrderConfirmation(false);
    navigate("/");
  };

  if (cart.length === 0 && !showOrderConfirmation) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some products to proceed with checkout
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#D87D4A] text-white px-6 py-3 rounded hover:bg-[#FBAF85] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      
      {showOrderConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thank you for your order!
              </h2>
              <p className="text-gray-600">
                You will receive an email confirmation shortly.
              </p>
            </div>

            <div className="bg-[#FAFAFA] rounded p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={cart[0]?.image.desktop}
                    alt={cart[0]?.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-bold text-sm">
                      {cart[0]?.name.split(" ").slice(0, 2).join(" ")}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      ${cart[0]?.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">
                  x{cart[0]?.quantity}
                </span>
              </div>
              {cart.length > 1 && (
                <div className="border-t mt-3 pt-3 text-center">
                  <p className="text-gray-500 text-sm">
                    and {cart.length - 1} other item{cart.length > 2 ? "s" : ""}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-black text-white p-4 rounded mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 uppercase text-sm">
                  Grand Total
                </span>
                <span className="font-bold text-lg">
                  ${grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={handleOrderComplete}
              className="w-full bg-[#D87D4A] text-white py-3 font-bold uppercase tracking-wide hover:bg-[#FBAF85] transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 mb-8 flex items-center gap-2 transition-colors"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Go Back
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
         
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 lg:p-8">
              <form onSubmit={handleSubmit}>
               
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-[#D87D4A] uppercase tracking-wide mb-6">
                    Billing Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent"
                        placeholder="Alexei Ward"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent"
                        placeholder="alexei@mail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent"
                        placeholder="+1 202-555-0136"
                      />
                    </div>
                  </div>
                </div>

               
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-[#D87D4A] uppercase tracking-wide mb-6">
                    Shipping Info
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Your Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent"
                        placeholder="1137 Williams Avenue"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent"
                          placeholder="10001"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent"
                          placeholder="New York"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent"
                        placeholder="United States"
                      />
                    </div>
                  </div>
                </div>

               
                <div>
                  <h2 className="text-lg font-bold text-[#D87D4A] uppercase tracking-wide mb-6">
                    Payment Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-4">
                        Payment Method
                      </label>
                    </div>
                    <div className="space-y-4">
                      <label className="flex items-center p-4 border border-gray-300 rounded cursor-pointer hover:border-[#D87D4A] transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="e-money"
                          checked={paymentMethod === "e-money"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-4 text-[#D87D4A]"
                        />
                        <span className="font-bold text-sm">e-Money</span>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded cursor-pointer hover:border-[#D87D4A] transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={paymentMethod === "cash"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-4 text-[#D87D4A]"
                        />
                        <span className="font-bold text-sm">
                          Cash on Delivery
                        </span>
                      </label>
                    </div>
                  </div>

                  {paymentMethod === "e-money" && (
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          e-Money Number *
                        </label>
                        <input
                          type="text"
                          name="eMoneyNumber"
                          value={formData.eMoneyNumber}
                          onChange={handleInputChange}
                          required={paymentMethod === "e-money"}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent"
                          placeholder="238521993"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          e-Money PIN *
                        </label>
                        <input
                          type="text"
                          name="eMoneyPin"
                          value={formData.eMoneyPin}
                          onChange={handleInputChange}
                          required={paymentMethod === "e-money"}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent"
                          placeholder="6891"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "cash" && (
                    <div className="mt-6 p-6 bg-[#FAFAFA] rounded">
                      <div className="flex gap-4">
                        <svg
                          className="w-12 h-12 flex-shrink-0"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#D87D4A"
                            d="M22 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM8 36v-6l8-4v-4l-8-4v-6l8 4 8-4v6l-8 4v4l8 4v6l-8-4-8 4zm32-12c0-8.8-7.2-16-16-16S8 15.2 8 24s7.2 16 16 16 16-7.2 16-16z"
                          />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            The 'Cash on Delivery' option enables you to pay in
                            cash when our delivery courier arrives at your
                            residence. Just make sure your address is correct so
                            that your order will not be cancelled.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

         
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 lg:p-8 sticky top-8">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-6">
                Summary
              </h2>

             
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.slug} className="flex items-center gap-4">
                    <img
                      src={item.image.desktop}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-gray-900">
                        {item.name
                          .replace(/headphones|earphones|speaker/i, "")
                          .trim()}
                      </h3>
                      <p className="text-gray-500 text-sm font-bold">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <span className="text-gray-500 text-sm font-bold">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>

             
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm uppercase">Total</span>
                  <span className="text-gray-900 font-bold">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm uppercase">
                    Shipping
                  </span>
                  <span className="text-gray-900 font-bold">${shipping}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm uppercase">
                    VAT (Included)
                  </span>
                  <span className="text-gray-900 font-bold">
                    ${vat.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6 pt-4 border-t">
                <span className="text-gray-500 text-sm uppercase">
                  Grand Total
                </span>
                <span className="text-[#D87D4A] font-bold text-lg">
                  ${grandTotal.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#D87D4A] text-white py-3 font-bold uppercase tracking-wide hover:bg-[#FBAF85] transition-colors duration-200"
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
