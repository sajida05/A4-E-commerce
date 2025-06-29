import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !name || !expiry || !cvv) {
      alert('Please fill in all the payment fields!');
      return;
    }
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto p-8">
        {/* ✅ Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 pt-4">
          <span className="text-gray-400">Home</span> / <span className="text-gray-400">Cart</span> / <span className="text-gray-700 font-medium">Checkout</span>
        </div>

        <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        <p className="text-green-600">✅ Your purchase was successful. Enjoy your tea!</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <div className="text-sm text-gray-500 mb-6 pt-4">
        <span className="text-gray-400">Home</span> / <span className="text-gray-400">Cart</span> / <span className="text-gray-700 font-medium">Checkout</span>
      </div>

      <h1 className="text-2xl font-bold mb-6">Secure Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name on Card"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="text-right font-semibold text-lg">
          Total: ${total}
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
}
