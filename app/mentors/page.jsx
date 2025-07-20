'use client';
import React from 'react';
import MentorCard from '../components/MentorCard.jsx';

const mentors = [
  {
    name: 'Ishaan Malhotra',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    college: 'University of Toronto',
    badge: 'AI Research Intern',
    logo: '/toronto.png',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Meera Kapoor',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    college: 'Stanford University',
    badge: 'Top 1% GRE',
    logo: '/stanford.png',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Arjun Desai',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    college: 'ETH Zurich',
    badge: 'Full Ride Scholar',
    logo: '/eth.png',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Simran Batra',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    college: 'Harvard University',
    badge: 'Ex-BCG Intern',
    logo: '/harvard.png',
    linkedin: 'https://linkedin.com/in/'
  },
  {
    name: 'Rohan Mehta',
    image: 'https://randomuser.me/api/portraits/men/38.jpg',
    college: 'Georgia Tech',
    badge: 'AI Safety Fellow',
    logo: '/gatech.png',
    linkedin: 'https://linkedin.com/in/'
  },
];

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center text-black mb-12">
        Learn from <span className="text-purple-600">Those Who’ve Done It</span>
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {mentors.map((mentor, i) => (
          <MentorCard key={i} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}
