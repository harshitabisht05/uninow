// components/NewsletterForm.jsx
'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate newsletter signup (replace with actual API)
    if (email) {
      console.log(`Subscribed: ${email}`);
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Join Our Newsletter</h2>
      <p className="text-gray-600 mb-4">Get updates on mentorship and learning resources.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Subscribe
        </button>
        {status === 'success' && <p className="text-green-600">Thanks for subscribing!</p>}
        {status === 'error' && <p className="text-red-600">Please enter a valid email.</p>}
      </form>
    </div>
  );
}
