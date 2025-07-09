'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "birlikte bereket, her köke ulaşır !",
    subtitle: "sulama sistemleri",
    buttonText: "Sipariş Ver!",
    buttonLink: "/products",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=400&fit=crop&crop=center",
    backgroundColor: "from-green-700/80 to-blue-700/80"
  },
  {
    id: 2,
    title: "Verimli Sulama Çözümleri",
    subtitle: "damlama sistemleri",
    buttonText: "Keşfet",
    buttonLink: "/categories/damlama-sistemleri",
    imageUrl: "https://www.gaziticaret.com/images/urunler/tarimsalsulama/tarimsalsulamabanner.jpg",
    backgroundColor: "from-blue-600/80 to-green-600/80"
  },
  {
    id: 3,
    title: "Bahçeniz için En İyi Çözüm",
    subtitle: "sprinkler sistemleri",
    buttonText: "İncele",
    buttonLink: "/categories/sprinkler-sistemleri",
    imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&h=400&fit=crop&crop=center",
    backgroundColor: "from-green-600/80 to-blue-600/80"
  },
  {
    id: 4,
    title: "Profesyonel Tarım Çözümleri",
    subtitle: "yağmurlama sistemleri",
    buttonText: "Görüntüle",
    buttonLink: "/categories/yagmurlama-sistemleri",
    imageUrl: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=1200&h=400&fit=crop&crop=center",
    backgroundColor: "from-blue-700/80 to-green-700/80"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-96 md:h-[450px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="relative h-full">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.backgroundColor}`} />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-blue-100 font-medium drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link 
                  href={slide.buttonLink}
                  className="inline-flex items-center px-10 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/30 transform hover:scale-105"
                >
                  {slide.buttonText}
                  <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sulamax Mascot (in corner) */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm">
                <span className="text-3xl md:text-4xl">🌊</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-md border border-white/30 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-md border border-white/30 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-200 border-2 border-white/50 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/60 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 