// import "./App.css";
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Companies from "./components/CompaniesLogos/Companies";
// import Services from "./components/services/Services";
// import CTA from "./components/CTA/CTA";
// import CaseStudies from "./components/CaseStudies/CaseStudies";
// import WorkingProcess from "./components/process/WorkingProcess";
// import Team from "./components/team/Team";

// function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <Companies />
//       <Services />
//       <CTA />
//       <CaseStudies />
//       <WorkingProcess />
//       <Team />
//     </>
//   );
// }

// export default App;

import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import UseCasesPage from "./pages/UseCasesPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

import Hero from "./components/Hero/Hero";
import Companies from "./components/CompaniesLogos/Companies";
import Services from "./components/services/Services";
import CTA from "./components/CTA/CTA";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import WorkingProcess from "./components/process/WorkingProcess";
import Team from "./components/team/Team";

import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer/Footer";

// Footer Bottom Pages
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollToTopOnRouteChange from "./components/ScrollToTop/ScrollToTopOnRouteChange";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/team" element={<TeamPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />
      </Routes>

      <ScrollToTop />
    </>
  );
}

export default App;
