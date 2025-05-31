import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../providers/cart.providers.js";
import Cats from "../components/Cats.jsx";
import YouMayAlsoLike from "../components/YouMayAlsoLike.jsx";

export default function Category() {
  const { category } = useParams();
  const { data } = useContext(CartContext);
  const navigate = useNavigate();
  const categoryProducts = data.filter(
    (product) => product.category === category
  );

  return (
    <div>
     
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-wide">
            {category}
          </h1>
        </div>
      </div>

    
      <div className="container mx-auto px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-[#D87D4A] transition-colors duration-200 font-medium"
        >
          Go Back
        </button>
      </div>

      <div className="container mx-auto px-6 pb-20">
        <div className="space-y-32">
          {categoryProducts.map((product, index) => (
            <div
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="bg-[#F1F1F1] rounded-lg overflow-hidden">
                  <img
                    src={product.image.desktop}
                    alt={product.name}
                    className="w-full h-[560px] object-cover"
                  />
                </div>
              </div>

             

              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="space-y-6">
                  {product.new && (
                    <p className="text-[#D87D4A] text-sm font-normal uppercase tracking-[10px]">
                      New Product
                    </p>
                  )}

                  <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide text-black leading-tight">
                    {product.name}
                  </h2>

                  <p className="text-gray-500 leading-relaxed text-lg">
                    {product.description}
                  </p>

                  <p className="text-black text-xl font-bold">
                    ${product.price.toLocaleString()}
                  </p>

                  <div className="pt-4">
                    <Link
                      to={`/${category}/${product.slug}`}
                      className="inline-block bg-[#D87D4A] text-white px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-[#FBAF85] transition-colors duration-200"
                    >
                      See Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <YouMayAlsoLike />
      <Cats />
    </div>
  );
}
