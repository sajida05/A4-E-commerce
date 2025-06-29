import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, cardNumber, expiry, cvv } = form;
    if (!name || !cardNumber || !expiry || !cvv) {
      alert("Please fill out all fields.");
      return;
    }

    alert(` Purchase complete! Thank you, ${name}.`);
    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {!submitted ? (
        <>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Cardholder Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={form.cardNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                className="w-1/2 border p-2 rounded"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={form.cvv}
                onChange={handleChange}
                className="w-1/2 border p-2 rounded"
              />
            </div>
          </div>

          <div className="text-right mt-4 text-lg font-semibold">
            Total: ${total.toFixed(2)}
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
          >
            Confirm Purchase
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2">Thanks for your purchase!</h2>
          <p className="text-gray-600 mb-4">We’d love your feedback.</p>

          <textarea
            rows="4"
            placeholder="How was your experience?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full border rounded p-2 mb-4"
          ></textarea>

          <button
            onClick={() => alert("Thanks for your feedback! ❤️")}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
          >
            Submit Feedback
          </button>
        </>
      )}
    </div>
  );
}
