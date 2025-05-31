import React from "react";

export default function AboutSection() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
        <div className="space-y-8 lg:pr-8">
          <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide text-black leading-tight">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h2>

          <p className="text-gray-500 leading-relaxed text-lg">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

       
        <div className="order-first lg:order-last">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/shared/desktop/image-best-gear.jpg"
              alt="Person using high-quality headphones"
              className="w-full h-[588px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
