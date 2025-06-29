import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // in future to actually implement CArousel
import teaimage from '../assets/teaimage.jpg';

const slides = [
  {
    image: teaimage,
    headline: 'Serene Sips',
    text: 'Share a warm moment, one cup at a time.',
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {}; // no-op since i ended up only have one slide
  const prevSlide = () => {};

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

      {/* Arrows hidden since there's only one slide */}
    </div>
  );
}
