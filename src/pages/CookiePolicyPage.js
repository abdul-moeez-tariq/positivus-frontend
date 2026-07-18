import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

import CookieHero from "../components/cookiePolicy/CookieHero";
import CookieHighlights from "../components/cookiePolicy/CookieHighlights";
import CookieContent from "../components/cookiePolicy/CookieContent";
import CookieCTA from "../components/cookiePolicy/CookieCTA";

function CookiePolicyPage() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <CookieHero />

        <CookieHighlights />

        <CookieContent />

        <CookieCTA />
      </main>

      <Footer />
    </>
  );
}

export default CookiePolicyPage;
