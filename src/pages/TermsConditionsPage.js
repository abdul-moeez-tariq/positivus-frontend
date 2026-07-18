import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

import TermsHero from "../components/termsConditions/TermsHero";
import TermsHighlights from "../components/termsConditions/TermsHighlights";
import TermsContent from "../components/termsConditions/TermsContent";
import TermsCTA from "../components/termsConditions/TermsCTA";

function TermsConditionsPage() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <TermsHero />

        <TermsHighlights />

        <TermsContent />

        <TermsCTA />
      </main>

      <Footer />
    </>
  );
}

export default TermsConditionsPage;
