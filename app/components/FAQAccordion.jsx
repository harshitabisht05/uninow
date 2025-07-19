'use client';

import { useState } from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What is UniNow?',
      answer: 'UniNow is a student-first platform connecting you with verified mentors and resources to guide your academic and career journey.',
    },
    {
      question: 'Is it free to use?',
      answer: 'Yes! UniNow offers essential features for free. Premium guidance services may have associated costs.',
    },
    {
      question: 'How do I find a mentor?',
      answer: 'Simply sign up, complete your profile, and explore mentor categories to book a session.',
    },
    {
      question: 'Are the mentors verified?',
      answer: 'Absolutely. Every mentor goes through a rigorous verification process before being listed.',
    },
    {
      question: 'Can I become a mentor?',
      answer: 'Yes, if you meet our eligibility criteria. Apply via the mentor registration form.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 dark:bg-[#0e0e0e] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-3xl text-gray-800 dark:text-white mb-4">
          🙋‍♀️ Frequently Asked Questions
        </h2>
        <p className="font-heading text-gray-600 dark:text-gray-300 mb-10">
          Got questions? We’ve got answers.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-black shadow-md transition duration-300"
            >
              <button
                className="font-heading flex justify-between items-center w-full text-left text-lg font-medium text-purple-600 dark:text-purple-300"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 dark:text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
