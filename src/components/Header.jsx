import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../providers/cart.providers.js";
import CartModal from "./CartModal.jsx";

export default function Header() {
  const { data, cart, setCart } = useContext(CartContext);
  const uniqCat = Array.from(new Set(data.map((el) => el.category)));
  const [showCartModal, setShowCartModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  console.log(cart, "cart");

  return (
    <div className="relative">
      {showCartModal && <CartModal />}

      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-16">
            {/* Mobile hamburger menu */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-white"></span>
                  <span className="w-full h-0.5 bg-white"></span>
                  <span className="w-full h-0.5 bg-white"></span>
                </div>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-white text-2xl font-bold tracking-wider"
              >
                audiophile
              </Link>
            </div>

            {/* Desktop navigation */}
            <ul className="hidden md:flex items-center space-x-8">
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

            {/* Cart button */}
            <div className="flex items-center">
              <button
                onClick={() => setShowCartModal((prev) => !prev)}
                className="relative p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
              >
                <img
                  src="/assets/shared/desktop/icon-cart.svg"
                  className="w-6 h-6 select-none pointer-events-none"
                  alt="Cart"
                />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D87D4A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu dropdown */}
        {showMobileMenu && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="container mx-auto px-6 py-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    onClick={() => setShowMobileMenu(false)}
                    className="block text-white text-sm font-bold uppercase tracking-wide hover:text-[#D87D4A] transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                {uniqCat.map((category) => (
                  <li key={category}>
                    <Link
                      to={`/${category}`}
                      onClick={() => setShowMobileMenu(false)}
                      className="block text-white text-sm font-bold uppercase tracking-wide hover:text-[#D87D4A] transition-colors duration-200"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
