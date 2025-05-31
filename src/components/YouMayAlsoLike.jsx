import React from "react";
import { Link } from "react-router-dom";

export default function YouMayAlsoLike() {
  const suggestedProducts = [
    {
      id: 1,
      name: "XX99 Mark I",
      image: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
      slug: "xx99-mark-one-headphones",
      category: "headphones",
    },
    {
      id: 2,
      name: "XX59",
      image:
        "assets/shared/desktop/image-xx59-headphones.jpg",
      slug: "xx59-headphones",
      category: "headphones",
    },
    {
      id: 3,
      name: "ZX9 Speaker",
      image: "/assets/shared/mobile/image-zx9-speaker.jpg",
      slug: "zx9-speaker",
      category: "speakers",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-black">
          You may also like
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {suggestedProducts.map((product) => (
          <div key={product.id} className="text-center group">
            <div className="bg-[#F1F1F1] rounded-lg mb-8 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-wide text-black mb-8">
              {product.name}
            </h3>
            <Link
              to={`/${product.category}/${product.slug}`}
              className="inline-block bg-[#D87D4A] text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#FBAF85] transition-colors duration-200"
            >
              See Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
