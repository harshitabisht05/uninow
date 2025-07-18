// app/page.jsx
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";
import ReviewCarousel from "./components/ReviewCarousel";
// import FAQAccordion from "./components/FAQAccordion";
import NewsletterForm from "./components/NewsletterForm";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
        <HeroSection />
      </section>

      {/* Review Carousel Section */}
      <section className="py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl mb-8 text-center text-gray-800 dark:text-white">
            What Our Students Say!!
          </h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* FAQ Section (optional - keep commented if not using) */}
      {/* <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section className="py-16 bg-purple-300/20 dark:bg-purple-500/10 text-white">
        <div className="container mx-auto px-4">
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}
