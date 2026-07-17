import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Achievements from "../components/about/Achievements";
import TeamPreview from "../components/about/TeamPreview";
import Technologies from "../components/about/Technologies";
import OurValues from "../components/about/OurValues";
import Testimonials from "../components/about/Testimonials";
import AboutCTA from "../components/about/AboutCTA";

function AboutPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <AboutHero />

        {/* Company Story */}
        <CompanyStory />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Achievements */}
        <Achievements />

        {/* Team Preview */}
        <TeamPreview />

        {/* Technologies */}
        <Technologies />

        {/* Core Values */}
        <OurValues />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Call To Action */}
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
