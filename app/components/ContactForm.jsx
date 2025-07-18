'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Replace with actual POST endpoint or email service
    console.log('Contact submitted:', data);
    alert('Thanks! We got your message 😊');
    setData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded shadow">
      {['name','email','message'].map(field => (
        <label key={field} className="block mb-4">
          <span className="font-body text-base capitalize">{field}</span>
          {field === 'message' ? (
            <textarea
              name={field}
              value={data[field]}
              onChange={handleChange}
              placeholder={`Your ${field}`}
              required
              className="mt-1 w-full p-2 border rounded bg-gray-50 dark:bg-gray-700"
            />
          ) : (
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={data[field]}
              onChange={handleChange}
              placeholder={`Your ${field}`}
              required
              className="mt-1 w-full p-2 border rounded bg-gray-50 dark:bg-gray-700"
            />
          )}
        </label>
      ))}
      <button type="submit" className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded">
        Send Message
      </button>
    </form>
  );
}
