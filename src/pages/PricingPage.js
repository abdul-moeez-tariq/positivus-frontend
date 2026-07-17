import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";
import PricingFeatures from "../components/pricing/PricingFeatures";
import PricingComparison from "../components/pricing/PricingComparison";
import PricingFAQ from "../components/pricing/PricingFAQ";
import PricingCTA from "../components/pricing/PricingCTA";


function PricingPage() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>

        <PricingHero />

        <PricingPlans />

        <PricingFeatures />

        <PricingComparison />

        <PricingFAQ />

        <PricingCTA />

      </main>

      <Footer />
    </>
  );
}


export default PricingPage;