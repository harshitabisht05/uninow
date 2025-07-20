'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Contact submitted:', data);
    alert('Thanks! We got your message 😊');
    setData({ name: '', email: '', message: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg p-6 rounded-xl shadow-md transition-colors
                 bg-purple-900/20 text-black border
                 dark:bg-gray-500/10 dark:text-white dark:border-gray-700"

    >
      {['name', 'email', 'message'].map(field => (
        <label key={field} className="block mb-4">
          <span className="block font-medium capitalize mb-1 text-gray-800 dark:text-gray-200">{field}</span>
          {field === 'message' ? (
            <textarea
              name={field}
              value={data[field]}
              onChange={handleChange}
              placeholder={`Your ${field}`}
              required
              className="font-heading mt-1 w-full p-2 border rounded transition-colors
                        border-gray-300 bg-gray-50 text-black placeholder-gray-500
                         dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              rows={4}
            />
          ) : (
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={data[field]}
              onChange={handleChange}
              placeholder={`Your ${field}`}
              required
              className="mt-1 w-full p-2 border rounded transition-colors
                         border-gray-300 bg-gray-50 text-black placeholder-gray-500
                         dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />
          )}
        </label>
      ))}
      <button
        type="submit"
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}