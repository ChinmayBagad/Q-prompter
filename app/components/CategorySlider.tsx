"use client";

import { useState } from "react";
import { categories } from "../data/categories";
import Link from "next/link";

export default function CategorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  // Calculate which cards to show (current, previous, next)
  const visibleCategories = [];
  for (let i = -1; i <= 1; i++) {
    const index = (currentIndex + i + categories.length) % categories.length;
    visibleCategories.push({
      ...categories[index],
      position: i // -1 = previous, 0 = current, 1 = next
    });
  }

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-8">
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#131e29]/70 hover:bg-[#131e29] text-white p-3 rounded-full border border-[#7b34dd]/30"
        aria-label="Previous category"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#131e29]/70 hover:bg-[#131e29] text-white p-3 rounded-full border border-[#7b34dd]/30"
        aria-label="Next category"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards Container */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Card Slider */}
        <div className="flex justify-center items-center h-full">
          {visibleCategories.map((category) => (
            <div 
              key={category.id}
              className={`absolute transition-all duration-500 ease-in-out w-full max-w-md
                ${category.position === -1 ? 'opacity-40 scale-75 -translate-x-[70%] z-0' : ''}
                ${category.position === 0 ? 'opacity-100 scale-100 translate-x-0 z-10' : ''}
                ${category.position === 1 ? 'opacity-40 scale-75 translate-x-[70%] z-0' : ''}
              `}
            >
              {/* Card Content */}
              <div className="relative">
                {/* Animated border effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#7b34dd] to-[#00c2cb] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse ${!category.active ? 'opacity-30' : ''}`}></div>
                
                <div className={`category-card ${category.active ? 'active' : ''} rounded-lg overflow-hidden shadow-lg p-6 relative bg-[#131e29] border border-[#7b34dd]/30`}>
                  <div className={`w-20 h-20 ${category.active ? 'bg-gradient-to-br from-[#7b34dd] to-[#00c2cb]' : 'bg-gray-700'} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl font-semibold text-center ${category.active ? 'text-white glow-text' : 'text-gray-400'} mb-4`}>
                    {category.name}
                  </h3>
                  <p className={`${category.active ? 'text-gray-300' : 'text-gray-500'} text-center mb-6`}>
                    {category.description}
                  </p>
                  {category.active ? (
                    <Link href={`/category/${category.id}`} className="aws-button w-full py-3 px-4 rounded-md font-medium text-white text-lg block text-center">
                      Select Category
                    </Link>
                  ) : (
                    <button className="w-full py-3 px-4 rounded-md font-medium text-white text-lg bg-gray-700 cursor-not-allowed" disabled>
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-gradient-to-r from-[#7b34dd] to-[#00c2cb] w-6' 
                : 'bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}