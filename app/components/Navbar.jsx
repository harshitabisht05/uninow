// components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">UniNow</Link>
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/mentors">Mentors</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
