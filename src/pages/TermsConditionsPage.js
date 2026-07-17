import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

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
