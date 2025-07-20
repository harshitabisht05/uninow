'use client';

import Link from 'next/link';

export default function BlogCard({ title, excerpt, date, slug, image }) {
  return (
    <div className="bg-purple-500/10 dark:bg-purple-900/20 shadow-lg rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <h2 className="font-heading text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{date}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {excerpt}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="inline-block text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
