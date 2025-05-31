import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="space-y-8">
        
        <div className="bg-[#D87D4A] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[560px]">
            <div className="flex justify-center p-8 lg:p-16">
              <img
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                className="w-full max-w-[410px] h-auto object-contain"
              />
            </div>
            <div className="text-white p-8 lg:p-16 lg:pl-0">
              <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-wide mb-6">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-[350px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                to="/speakers/zx9-speaker"
                className="inline-block bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-200"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>

       
        <div className="bg-gray-100 rounded-lg overflow-hidden min-h-[320px] relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/assets/home/desktop/image-speaker-zx7.jpg')",
            }}
          />
          <div className="relative z-10 flex items-center h-full p-8 lg:p-16">
            <div>
              <h3 className="text-3xl font-bold uppercase tracking-wide text-black mb-8">
                ZX7 SPEAKER
              </h3>
              <Link
                to="/speakers/zx7-speaker"
                className="inline-block border-2 border-black text-black px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-200"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden min-h-[320px]">
            <img
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 rounded-lg flex items-center p-8 lg:p-16">
            <div>
              <h3 className="text-3xl font-bold uppercase tracking-wide text-black mb-8">
                YX1 EARPHONES
              </h3>
              <Link
                to="/earphones/yx1-earphones"
                className="inline-block border-2 border-black text-black px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-200"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
