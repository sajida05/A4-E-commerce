import HeroCarousel from '../components/HeroCarousel';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-serif mb-4">Welcome to Serene Sips</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Discover premium teas curated for every moment — calming, energizing, and everything in between.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition"
        >
          Shop All Teas
        </Link>
      </section>
    </div>
  );
}
