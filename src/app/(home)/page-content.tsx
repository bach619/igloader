import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { HowItWorks } from "./_components/how-it-works";
import { Testimonials } from "./_components/testimonials";
import { FrequentlyAsked } from "./_components/frequently-asked";
import { Adsense } from "./_components/adsense";

export default function HomePage() {
  return (
    <div>

        {/* Features Section */}
      <Adsense />
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FrequentlyAsked />
    </div>
  );
}
