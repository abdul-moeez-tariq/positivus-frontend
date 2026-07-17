import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import UseCasesHero from "../components/useCases/UseCasesHero";
import UseCasesGrid from "../components/useCases/UseCasesGrid";
import IndustrySolutions from "../components/useCases/IndustrySolutions";
import SuccessStories from "../components/useCases/SuccessStories";
import UseCasesProcess from "../components/useCases/UseCasesProcess";
import UseCasesCTA from "../components/useCases/UseCasesCTA";


function UseCasesPage() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>

        <UseCasesHero />

        <UseCasesGrid />

        <IndustrySolutions />

        <SuccessStories />

        <UseCasesProcess />

        <UseCasesCTA />

      </main>

      <Footer />
    </>
  );
}


export default UseCasesPage;