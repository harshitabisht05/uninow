import PolicyContent from '../components/PolicyContent';
import FAQAccordion from '../components/FAQAccordion';

export default function LegalPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#0f0f0f] text-black dark:text-white transition-colors duration-300">
      <main className="px-4 sm:px-6 md:px-8 py-16">
        <h1 className="text-5xl font-bold text-center text-[#7B2CBF] dark:text-purple-300 mb-12">
          Legal Documents
        </h1>

        <section className="max-w-5xl mx-auto bg-[#F3E8FF] dark:bg-[#1e1e2f] text-black dark:text-white p-6 md:p-10 rounded-xl shadow-md shadow-purple-300/40 mb-16 border border-purple-200 dark:border-purple-700">
          <PolicyContent />
        </section>

        <h2 className="text-4xl font-semibold text-center text-[#5A189A] dark:text-purple-200 mb-10">
          Frequently Asked Questions
        </h2>

        <section className="max-w-5xl mx-auto bg-[#F3E8FF] dark:bg-[#1e1e2f] text-black dark:text-white p-6 md:p-10 rounded-xl shadow-md shadow-purple-300/40 border border-purple-200 dark:border-purple-700">
          <FAQAccordion />
        </section>
      </main>
    </div>
  );
}
