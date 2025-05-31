import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../providers/cart.providers.js";
import YouMayAlsoLike from "../components/YouMayAlsoLike.jsx";
import Cats from "../components/Cats.jsx";

export default function Slug() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "plus") {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleAddcart = () => {
    const existingItem = cart.find((item) => item.slug === product.slug);

    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: quantity }]);
    }
    setQuantity(1);
  };

  const product = data.find((product) => product.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-[#D87D4A] text-white px-6 py-3 rounded hover:bg-[#FBAF85] transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
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

      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
      
        <div className="relative">
          <img
            src={product.image.desktop}
            alt={product.name}
            className="w-full h-[400px] lg:h-[560px] object-cover rounded-lg"
          />
          {product.new && (
            <span className="absolute top-4 left-4 bg-[#D87D4A] text-white px-3 py-1 text-sm font-bold tracking-wide uppercase rounded">
              New Product
            </span>
          )}
        </div>

       
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {product.name}
          </h1>

          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="text-2xl font-bold text-gray-900 mb-8">
            ${product.price.toLocaleString()}
          </div>

          
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-between bg-[#F1F1F1] w-[120px] h-[48px] px-4 rounded">
              <button
                onClick={() => handleQuantity("minus")}
                className="text-gray-400 hover:text-gray-600 text-lg font-light w-6 h-6 flex items-center justify-center transition-colors"
              >
                −
              </button>
              <span className="text-black font-bold text-base mx-2">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantity("plus")}
                className="text-gray-400 hover:text-gray-600 text-lg font-light w-6 h-6 flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddcart}
              className="bg-[#D87D4A] text-white px-8 py-3 text-sm font-bold tracking-wide uppercase hover:bg-[#FBAF85] transition-colors duration-200 rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Features
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            {product.features.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

       
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            In the Box
          </h2>
          <ul className="space-y-3">
            {product.includes.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="text-[#D87D4A] font-bold text-lg min-w-[30px]">
                  {item.quantity}x
                </span>
                <span className="text-gray-600">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

     
      <div className="mb-16">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-2">
            <img
              src={product.gallery.first.desktop}
              alt={`${product.name} gallery 1`}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6">
            <img
              src={product.gallery.second.desktop}
              alt={`${product.name} gallery 2`}
              className="w-full h-[140px] lg:h-[190px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src={product.gallery.third.desktop}
              alt={`${product.name} gallery 3`}
              className="w-full h-[140px] lg:h-[190px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <YouMayAlsoLike />
      <Cats />
    </div>
  );
}
