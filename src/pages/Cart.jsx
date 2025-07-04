import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.flavor}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right font-semibold text-lg">
              Total: ${total.toFixed(2)}
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => navigate('/shop')}
              className="ml-2 text-sm text-green-700 hover:underline"
            > ← Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
