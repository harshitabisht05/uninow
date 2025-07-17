// components/ReviewCarousel.jsx
export default function ReviewCarousel() {
  const reviews = [
    { name: 'Aarav', text: 'UniNow helped me find the perfect mentor for my tech journey!' },
    { name: 'Riya', text: 'The resources and mentors are top-notch. Love the experience!' },
    { name: 'Kabir', text: 'Perfect platform for students who want verified mentorship.' },
  ];

  return (
    <div className="bg-blue-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">What Students Say</h2>
      <div className="flex overflow-x-auto gap-6 justify-center">
        {reviews.map((review, index) => (
          <div key={index} className="min-w-[300px] bg-white p-6 rounded-lg shadow">
            <p className="text-gray-800 italic">“{review.text}”</p>
            <p className="mt-4 font-semibold text-blue-600">– {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
