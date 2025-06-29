import { useState } from 'react';

export default function PostPurchaseSurvey() {
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (feedback.trim()) {
      alert("🎉 Thank you for your feedback!");
      setSubmitted(true);
    } else {
      alert("Please share your thoughts before submitting!");
    }
  };

  if (submitted) {
    return <div className="text-center mt-10 text-green-600 font-semibold">Thanks again! ☕</div>;
  }

  return (
    <div className="mt-10 bg-white border rounded-lg shadow-md p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">We’d love to hear from you!</h2>
      <p className="text-sm text-gray-600 mb-2 text-center">How was your experience with Serene Sips?</p>
      <textarea
        className="w-full border p-2 rounded mb-4"
        rows={4}
        placeholder="Share your thoughts..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="block w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Send Feedback 💌
      </button>
    </div>
  );
}
