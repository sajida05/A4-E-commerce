import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function TeaCard({ id, title, flavor, price, image }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ id, title, flavor, price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="relative bg-neutral-100 p-6 rounded-lg shadow-sm flex flex-col items-center text-center group">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-serif mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{flavor}</p>

      {/* Hover area with Add + Price */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-sm tracking-wide py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
        <button onClick={handleAdd}>
          {added ? "✓ Added!" : "ADD TO CART"}
        </button>
        <span>${price}</span>
      </div>
    </div>
  );
}
