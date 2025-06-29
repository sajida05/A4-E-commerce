import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [cardInfo, setCardInfo] = useState('');
  const [showSurvey, setShowSurvey] = useState(false);
  const [feedback, setFeedback] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = () => {
    if (!cardInfo) {
      alert('Please enter your card number.');
    } else {
      alert(`Purchase completed with card: ${cardInfo}`);
      clearCart();
      setCardInfo('');
      setShowSurvey(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

      {cart.length === 0 && !showSurvey ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          {!showSurvey ? (
            <>
              {/* Cart Summary */}
              <div className="space-y-6 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b py-4">
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-sm text-gray-500">{item.flavor}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="text-right font-semibold text-lg mb-4">
                Total: ${total.toFixed(2)}
              </div>

              {/* Card input */}
              <input
                type="text"
                placeholder="Enter card number"
                value={cardInfo}
                onChange={(e) => setCardInfo(e.target.value)}
                className="w-full border p-2 rounded mb-4"
              />

              <button
                onClick={handleConfirm}
                className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Confirm Purchase
              </button>
            </>
          ) : (
            <>
              {/* Survey Section */}
              <div className="mt-8 space-y-4">
                <h2 className="text-lg font-semibold">We’d love your feedback!</h2>
                <p>How was your shopping experience?</p>
                <textarea
                  className="w-full border p-2 rounded"
                  rows={4}
                  placeholder="Let us know what you liked or what we could improve!"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
                <button
                  onClick={() => alert('Thank you for your feedback!')}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Submit Feedback
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
