import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../providers/cart.providers.js";

export default function Footer() {
  const { data } = useContext(CartContext);
  const uniqCat = Array.from(new Set(data.map((el) => el.category)));

  return (
    <footer className="bg-black text-white relative">
      
      <div className="h-1 bg-[#D87D4A] w-24"></div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          
          <div className="space-y-8">
            <div>
              <Link
                to="/"
                className="text-white text-2xl font-bold tracking-wider"
              >
                audiophile
              </Link>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </div>

         
          <div className="lg:flex lg:flex-col lg:items-end space-y-8">
            
            <nav>
              <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                <li>
                  <Link
                    to="/"
                    className="text-white text-sm font-bold uppercase tracking-wide hover:text-[#D87D4A] transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                {uniqCat.map((category) => (
                  <li key={category}>
                    <Link
                      to={`/${category}`}
                      className="text-white text-sm font-bold uppercase tracking-wide hover:text-[#D87D4A] transition-colors duration-200"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            
            <div className="flex space-x-4 lg:mt-auto">
              <a
                href="#"
                className="text-white hover:text-[#D87D4A] transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#D87D4A] transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#D87D4A] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-2.354 0-4.262-1.909-4.262-4.265 0-2.354 1.909-4.262 4.262-4.262 2.354 0 4.265 1.909 4.265 4.262 0 2.356-1.911 4.265-4.265 4.265zm7.718 0c-2.354 0-4.262-1.909-4.262-4.265 0-2.354 1.909-4.262 4.262-4.262 2.354 0 4.265 1.909 4.265 4.262 0 2.356-1.911 4.265-4.265 4.265z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

       
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
