'use client';
import Link from 'next/link';
import PolicyContent from '../components/PolicyContent';

export default function LegalPage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Policies</span> that protect you
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          We're committed to your privacy and clarity. Please review our terms below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-purple-50 dark:bg-zinc-900 rounded-2xl shadow-lg p-6 md:p-8">
        <PolicyContent
          title={
            <span className="text-purple-600 dark:text-purple-400">
              🔐 Privacy Policy
            </span>
          }
          content={[
            "We only collect data necessary to provide our services.",
            "Your data is encrypted and stored securely.",
            "You may request deletion of your data at any time."
          ]}
        />

        <div className="my-6 border-t border-gray-300 dark:border-gray-600"></div>

        <PolicyContent
          title={
            <span className="text-purple-600 dark:text-purple-400">
              📄 Terms & Conditions
            </span>
          }
          content={[
            "By using UniNow, you agree to comply with our terms.",
            "Content is protected and cannot be reused without permission.",
            "We may update terms and will notify users of any changes."
          ]}
        />
      </div>

      <div className="text-center mt-10">
       <Link href="/">
  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
    Go to Home
  </button>
</Link>
      </div>
    </main>
  );
}