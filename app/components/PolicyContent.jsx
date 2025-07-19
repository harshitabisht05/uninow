import { FaLinkedinIn } from 'react-icons/fa';

export default function MentorCard({ mentor }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 text-center border border-gray-200 hover:shadow-xl transition-all">
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-32 h-32 rounded-xl object-cover mx-auto mb-4"
      />
      <h2 className="text-lg font-semibold text-black">{mentor.name}</h2>
      <div className="flex justify-center items-center gap-2 mt-1 mb-2">
        <img
          src={mentor.logo}
          alt={`${mentor.college} logo`}
          className="w-6 h-6 object-contain"
        />
        <p className="text-sm text-gray-600">{mentor.college}</p>
      </div>
      <div className="mt-3">
        <span className="px-3 py-1 text-sm text-purple-600 border border-purple-300 rounded-full bg-purple-50">
          {mentor.badge}
        </span>
      </div>

      {/* LinkedIn icon-only button */}
      {mentor.linkedin && (
        <div className="mt-4">
          <a
            href={mentor.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 transition"
          >
            <FaLinkedinIn className="text-white text-lg" />
          </a>
        </div>
      )}
    </div>
  );
}
