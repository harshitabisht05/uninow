'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }

    setError('');
    setTimeout(() => {
      setShowModal(true);
      setEmail('');
    }, 300);
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-12 px-6 py-8 text-center bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Stay updated with our latest features and mentors.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition"
          >
            Subscribe
          </button>
        </form>

        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-neutral-900 text-center rounded-2xl shadow-2xl px-8 py-6 max-w-sm w-full">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">Thank You!</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You’ve successfully subscribed to our newsletter.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
