import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-black text-center px-4 py-20 transition-colors duration-300">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-heading leading-tight text-gray-900 dark:text-white transition-colors">
        Know what it <span className="text-purple-500">takes </span>
        from those <span className="text-purple-500">who’ve done it</span>
      </h1>

      {/* Subheading */}
      <p className="font-body text-lg mt-6 text-gray-600 dark:text-gray-300 max-w-xl mx-auto transition-colors">
        Your mentor has <span className="font-semibold text-black dark:text-white underline decoration-purple-400 decoration-4 underline-offset-2">been there,</span><br />
        <span className="underline decoration-purple-400 decoration-4 underline-offset-2">done that</span> — and now they’re here for you.
      </p>

      {/* Feature Box */}
      <div className="font-body mt-10 bg-purple-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg p-6 max-w-md mx-auto text-left space-y-4 transition-colors">
        <div className="flex items-center space-x-3">
          <span>🚀</span>
          <p className="text-gray-700 dark:text-gray-200">Follow a proven roadmap to top universities</p>
        </div>
        <div className="flex items-center space-x-3">
          <span>🧑‍🏫</span>
          <p className="text-gray-700 dark:text-gray-200">Learn directly from mentors who’ve made it</p>
        </div>
        <div className="flex items-center space-x-3">
          <span>🎯</span>
          <p className="text-gray-700 dark:text-gray-200">Stay focused with personalized support at every step</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <Link href="/mentors">
          <button className="font-heading bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-900 transition duration-300 shadow-md shadow-purple-300/60">
            Find your Mentor 🚀
          </button>
        </Link>
      </div>
    </section>
  );
}
