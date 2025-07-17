// app/page.jsx
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";
import ReviewCarousel from "./components/ReviewCarousel";
// import FAQAccordion from "./components/FAQAccordion";
import NewsletterForm from "./components/NewsletterForm";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <section className="min-h-screen flex items-center justify-center">
        <HeroSection />
      </section>

      <section className="py-16 bg-black dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section> */}

      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}
