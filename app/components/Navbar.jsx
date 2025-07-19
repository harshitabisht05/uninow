'use client';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle'; // ✅ Import it

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-black sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo on Left */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="font-heading text-2xl text-[#002244] dark:text-white">UniNow</span>
        </Link>

        {/* Center Nav Links + DarkModeToggle */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-800 dark:text-gray-200">
          <Link
            href="/mentors"
            className="px-4 py-2 rounded-full transition hover:bg-gray-300 dark:hover:bg-gray-800"
          >
            Our Mentors
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full transition hover:bg-gray-300 dark:hover:bg-gray-800"
          >
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full transition hover:bg-gray-300 dark:hover:bg-gray-800"
          >
            Blogs
          </Link>
          <Link
            href="/legal"
            className="px-4 py-2 rounded-full transition hover:bg-gray-300 dark:hover:bg-gray-800"
          >
            Policy
          </Link>

          {/* ✅ Dark mode toggle button on all pages */}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
