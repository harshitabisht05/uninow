// components/FAQSection.jsx
export default function FAQSection() {
  const faqs = [
    { question: 'How do I find a mentor?', answer: 'Use the “Find Your Mentor” button on the homepage.' },
    { question: 'Is UniNow free to use?', answer: 'Yes, UniNow is completely free for students.' },
    { question: 'How are mentors verified?', answer: 'All mentors go through a strict verification process before being listed.' },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
