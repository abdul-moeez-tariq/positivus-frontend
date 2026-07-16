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
import Hero from "./components/Hero/Hero";
import Companies from "./components/CompaniesLogos/Companies";
import Services from "./components/services/Services";
import ContactPage from "./pages/ContactPage";
import CTA from "./components/CTA/CTA";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import WorkingProcess from "./components/process/WorkingProcess";
import Team from "./components/team/Team";

import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer/Footer";
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

        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <ScrollToTop />
    </>
  );
}

export default App;
