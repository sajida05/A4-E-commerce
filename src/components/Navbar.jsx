import { Search, User, ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onSearch, onClearFilters }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { cart } = useCart(); // ✅ FIXED

  const openSearch = () => {
    setShowSearchBar(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeSearch = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowSearchBar(false);
      setSearchInput("");
      onSearch("");
      onClearFilters();
    }, 300);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold font-serif text-gray-800">
          Serene Sips
        </Link>

        <div className="space-x-6 hidden md:flex text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/shop" className="hover:text-green-600 transition">Shop</Link>
          <Link to="/about" className="hover:text-green-600 transition">About</Link>
        </div>

        <div className="flex items-center space-x-5">
          <Search
            className="w-5 h-5 cursor-pointer hover:text-green-700 transition"
            onClick={openSearch}
          />
          <User className="w-5 h-5 cursor-pointer hover:text-green-700 transition" />
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-green-700 transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-green-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {showSearchBar && (
        <div
          className={`z-40 w-full bg-neutral-100 px-8 flex items-center justify-between fixed top-0 left-0 transition-transform duration-300 ease-in-out ${
            isVisible ? 'translate-y-16' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center space-x-4 w-full py-6">
            <Search className="w-5 h-5 text-gray-600" />
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchChange}
              placeholder="Search teas..."
              autoFocus
              className="w-full bg-transparent outline-none text-lg placeholder:text-gray-500 font-medium"
            />
          </div>
          <X
            onClick={closeSearch}
            className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black"
          />
        </div>
      )}
    </>
  );
}
