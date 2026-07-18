import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

import PrivacyHero from "../components/privacyPolicy/PrivacyHero";
import PrivacyHighlights from "../components/privacyPolicy/PrivacyHighlights";
import PrivacyContent from "../components/privacyPolicy/PrivacyContent";
import PrivacyCTA from "../components/privacyPolicy/PrivacyCTA";

function PrivacyPolicyPage() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <PrivacyHero />

        <PrivacyHighlights />

        <PrivacyContent />

        <PrivacyCTA />
      </main>

      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
