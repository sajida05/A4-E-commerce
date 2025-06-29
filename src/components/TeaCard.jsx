import { useCart } from '../context/CartContext';

export default function TeaCard({ id, title, flavor, price, image }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, title, flavor, price, image });
  };

  return (
    <div className="relative bg-neutral-100 p-6 rounded-lg shadow-sm flex flex-col items-center text-center group">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-serif mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{flavor}</p>

      <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm tracking-wide flex items-center justify-center space-x-4 py-3 transition-opacity duration-300">
        <button onClick={handleAdd} className="font-medium hover:underline">
          ADD TO CART
        </button>
        <span className="text-sm font-semibold">{price}$</span>
      </div>
    </div>
  );
}
