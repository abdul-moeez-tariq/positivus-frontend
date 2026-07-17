import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

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
