import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

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
