import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../providers/cart.providers.js";

export default function Cats() {
  const { data } = useContext(CartContext);
  const uniqCat = Array.from(new Set(data.map((el) => el.category)));

  const categoryImages = {
    headphones:
      "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    speakers: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    earphones: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {uniqCat.map((category) => (
          <div key={category} className="group">
            <div className="bg-[#F1F1F1] rounded-lg px-6 pt-20 pb-6 text-center relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <img
                  src={categoryImages[category.toLowerCase()]}
                  alt={category}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-black mb-4 mt-8">
                {category}
              </h3>
              <Link
                to={`/${category}`}
                className="inline-flex items-center text-sm font-bold text-gray-500 uppercase tracking-wide hover:text-[#D87D4A] transition-colors duration-200"
              >
                Shop
                <svg
                  className="ml-3 w-2 h-3 text-[#D87D4A]"
                  fill="currentColor"
                  viewBox="0 0 8 12"
                >
                  <path
                    d="M1.322 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
