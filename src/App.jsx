import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext"; 
import Cart from "./pages/Cart"; 
import Checkout from './pages/Checkout';



export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCaffeine, setSelectedCaffeine] = useState("All");
  const [selectedOrigin, setSelectedOrigin] = useState("All");

  const resetFilters = () => {
    setActiveFilter("All");
    setSelectedCaffeine("All");
    setSelectedOrigin("All");
  };

  return (
    <CartProvider> 
      <Navbar onSearch={setSearchQuery} onClearFilters={resetFilters} />
      <Routes>
        <Route
          path="/shop"
          element={
            <Shop
              searchQuery={searchQuery}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              selectedCaffeine={selectedCaffeine}
              setSelectedCaffeine={setSelectedCaffeine}
              selectedOrigin={selectedOrigin}
              setSelectedOrigin={setSelectedOrigin}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />


      </Routes>
    </CartProvider>
  );
}
