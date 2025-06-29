import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import teaimage from '../assets/teaimage.jpg'


const slides = [
  {
    image: teaimage,
    headline: 'Serene Sips',
    text: 'Share a warm moment, one cup at a time.',
  },
  {
    image: 'https://source.unsplash.com/random/1600x900/?tea',
    headline: 'Tea for Every Mood',
    text: 'Relax, energize, focus, and choose your experience.',
  },
  {
    image: 'https://source.unsplash.com/1600x400/?matcha',
    headline: 'Natural & Organic',
    text: 'Zero additives. 100% plant-powered.',
  },
];


export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full overflow-hidden h-[400px]">
      {/* Slide wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-[400px] relative">
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-20 text-white">
              <h2 className="text-3xl font-serif mb-2">{slide.headline}</h2>
              <p className="text-md">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 transition"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 transition"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}
