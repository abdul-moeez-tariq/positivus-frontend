import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

import ServicesHero from "../components/servicesPage/ServicesHero";
import ServicesGrid from "../components/servicesPage/ServicesGrid";
import WhyChooseServices from "../components/servicesPage/WhyChooseServices";
import DevelopmentProcess from "../components/servicesPage/DevelopmentProcess";
import Industries from "../components/servicesPage/Industries";
import ServicesFAQ from "../components/servicesPage/ServicesFAQ";
import ServicesCTA from "../components/servicesPage/ServicesCTA";

function ServicesPage() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <ServicesHero />

        <ServicesGrid />

        <WhyChooseServices />

        <DevelopmentProcess />

        <Industries />

        <ServicesFAQ />

        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;
