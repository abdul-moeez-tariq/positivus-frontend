import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/CompaniesLogos/Companies";
import Services from "./components/services/Services";
import CTA from "./components/CTA/CTA";
import CaseStudies from "./components/CaseStudies/CaseStudies";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Services />
      <CTA />
      <CaseStudies />
    </>
  );
}

export default App;
