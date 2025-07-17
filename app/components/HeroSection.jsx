// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-5xl font-heading mb-6">Welcome to UniNow</h1>
      <p className="text-lg mb-8 max-w-2xl font-body text-base mx-auto">
        Empowering students with verified mentors, curated resources, and a path to career success.
      </p>
      <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition">
        Get Started
      </button>
    </div>
  );
}
