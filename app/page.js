import Hero from "./_components/Hero";
import { HowItWorks } from "./_components/HowItWorks";
import { Testimonials } from "./_components/Testimonials";
import { StatsSection } from "./_components/StatsSection";
import { CTA } from "./_components/CTA";
import { ServicesOverview } from "./_components/ServicesOverview";
import { FAQ } from "./_components/FAQ";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <ServicesOverview />
      </section>

      {/* How It Works */}
      <section className="py-16">
        <HowItWorks />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#248c89] text-white">
        <StatsSection />
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <FAQ/>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <Testimonials />
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <CTA />
      </section>
    </div>
  );
}
