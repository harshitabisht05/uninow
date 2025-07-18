'use client';

import { useEffect, useRef } from 'react';

export default function ReviewCarousel() {
  const reviews = [
    { name: 'Aarav', text: 'UniNow helped me find the perfect mentor for my tech journey!' },
    { name: 'Riya', text: 'The resources and mentors are top-notch. Love the experience!' },
    { name: 'Kabir', text: 'Perfect platform for students who want verified mentorship.' },
    { name: 'Ishaan', text: 'Highly recommend it to any student aiming abroad. So easy to navigate.' },
    { name: 'Dev', text: 'From confusion to clarity — that’s what UniNow did for me!' },
    { name: 'Simran', text: 'It felt like a friend guiding me rather than a stranger. Loved it!' },
    { name: 'Yash', text: 'Super useful platform. Saved me time, effort, and a lot of mistakes.' },
    { name: 'Ananya', text: 'I got accepted into my dream university thanks to my mentor’s guidance.' },
    { name: 'Raghav', text: 'The UI is great and the mentors are seriously experienced.' },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    let animationFrameId;
    const scrollAmount = 1.5;

    const animate = () => {
      if (el) {
        el.scrollLeft += scrollAmount;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-16 px-4 text-center overflow-hidden bg-white dark:bg-black">
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={scrollRef}
          className="flex items-center space-x-4 overflow-x-auto no-scrollbar px-4"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="w-4 flex-shrink-0" />

          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] 
              bg-purple-100 dark:bg-purple-500/10 backdrop-blur-lg 
              border dark:border-white/10 
              text-gray-800 dark:text-white rounded-xl p-6 shadow-md 
              hover:shadow-purple-500/20 hover:scale-105 
              transition duration-300"
            >
              <p className="italic text-sm sm:text-base">“{review.text}”</p>
              <p className="mt-4 font-semibold text-purple-600 dark:text-purple-300">– {review.name}</p>
            </div>
          ))}

          <div className="w-4 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
