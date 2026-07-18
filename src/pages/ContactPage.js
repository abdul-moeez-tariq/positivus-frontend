import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import OfficeLocations from "../components/contact/OfficeLocations";
import WhyWorkWithUs from "../components/contact/WhyWorkWithUs";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";

function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <ContactHero />

        <ContactInfo />

        <ContactForm />

        <OfficeLocations />

        <WhyWorkWithUs />

        <ContactFAQ />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
